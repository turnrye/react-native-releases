#!/usr/bin/env node

"use strict";

const levenshtein = require("fast-levenshtein");
const latestVersion = require("latest-version");
const { parser } = require('keep-a-changelog');
const fs = require('fs');

const argv = require("yargs")
  .usage(
    "$0 [args]",
    "Generate a React Native changelog from the commits and PRs"
  )
  .options({
    base: {
      alias: "b",
      describe:
        "the base version branch or commit to compare against (most often, this is the current stable); if omitted, the latest version listed in the changelog is used",
      demandOption: false
    },
    compare: {
      alias: "c",
      describe:
        "the new version branch or commit (most often, this is the release candidate); if omitted, the latest version of React Native is used",
      demandOption: false
    }
  })
  .version(false)
  .help("help").argv;

let base = argv.base;
let compare = argv.compare;

function fetchJSON(host, path) {
  return new Promise((resolve, reject) => {
    let data = "";

    require("https")
      .get({
        host,
        path,
        headers: {
          "User-Agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
        }
      })
      .on("response", response => {
        if(!(response.statusCode < 400)) {
          reject("Didn't get a good response back from github; did you pass a valid tag, branch, or commit hash for your base and comparison?");
        }
        response.on("data", chunk => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            const json = JSON.parse(data);
            resolve(json);
          } catch (e) {
            reject(e);
          }
        });

        response.on("error", error => {
          reject(error);
        });
      });
  });
}

function filterCICommits(commits) {
  return commits.filter(item => {
    const text = item.commit.message.toLowerCase();
    return !(
      text.includes("travis") ||
      text.includes("circleci") ||
      text.includes("circle ci") ||
      text.includes("bump version numbers") ||
      text.includes("docker")
    );
  });
}
function filterRevertCommits(commits) {
  let revertCommits = [];
  const pattern = /\b(revert d\d{8}: |revert\b|back out ".*")/i;
  const filteredCommits = commits
    .filter(item => {
      const text = item.commit.message.split("\n")[0].toLowerCase();
      const shouldRemove =
        pattern.test(text) && revertCommits.push(text.replace(pattern, ""));
      if (shouldRemove) console.warn("Removing revert commit: \n" + text);
      return !shouldRemove;
    })
    .filter(item => {
      let text = item.commit.message.split("\n")[0].toLowerCase();
      revertCommits.forEach(revertCommit => {
        if (levenshtein.get(text, revertCommit) < 0.5 * revertCommit.length) {
          revertCommits = revertCommits.filter(function(e) {
            return e !== revertCommit;
          });
          return false;
        }
      });
      return true;
    });
  if (revertCommits.length > 0)
    console.warn(
      "Was unable to find the mate for the following revert commits: \n\n" +
        revertCommits.join("\n") +
        "\n\nYou will need to manually remove this from below."
    );
  return filteredCommits;
}

function isAndroidCommit(change) {
  return (
    !/(\[ios\]|\[general\])/i.test(change) &&
    (/\b(android|java)\b/i.test(change) || /android/i.test(change))
  );
}

function isIOSCommit(change) {
  return (
    !/(\[android\]|\[general\])/i.test(change) &&
    (/\b(ios|xcode|swift|objective-c|iphone|ipad)\b/i.test(change) ||
      /ios\b/i.test(change) ||
      /\brct/i.test(change))
  );
}

function isAdded(change) {
  return /\b(added)\b/i.test(change);
}

function isChanged(change) {
  return /\b(changed)\b/i.test(change);
}

function isDeprecated(change) {
  return /\b(deprecated)\b/i.test(change);
}

function isRemoved(change) {
  return /\b(removed)\b/i.test(change);
}

function isFixed(change) {
  return /\b(fixed)\b/i.test(change);
}

function isSecurity(change) {
  return /\b(security)\b/i.test(change);
}

function isFabric(change) {
  return /\b(fabric)\b/i.test(change);
}

function isTurboModules(change) {
  return /\b(tm)\b/i.test(change);
}

function isInternal(change) {
  return /^\[internal\]/i.test(change);
}

function getChangeMessage(item) {
  const commitMessage = item.commit.message.split("\n");
  let entry =
    commitMessage
      .reverse()
      .find(a => /\[ios\]|\[android\]|\[general\]/i.test(a)) ||
    commitMessage.reverse()[0];
  entry = entry.replace(/^((\[\w*\] ?)+ - )/i, ""); //Remove the [General] [whatever]
  entry = entry.replace(/ \(\#\d*\)$/i, ""); //Remove the PR number if it's on the end

  const authorSection = `([${item.sha.slice(
    0,
    7
  )}](https://github.com/facebook/react-native/commit/${item.sha.slice(0, 7)})${
    item.author
      ? " by [@" +
        item.author.login +
        "](https://github.com/" +
        item.author.login +
        ")"
      : ""
  })`;
  return `- ${entry} ${authorSection}`;
}

function getChangelogDesc(commits) {
  const acc = {
    added: { android: [], ios: [], general: [] },
    changed: { android: [], ios: [], general: [] },
    deprecated: { android: [], ios: [], general: [] },
    removed: { android: [], ios: [], general: [] },
    fixed: { android: [], ios: [], general: [] },
    security: { android: [], ios: [], general: [] },
    unknown: { android: [], ios: [], general: [] }
  };

  commits.forEach(item => {
    const change = item.commit.message;
    const message = getChangeMessage(item);

    if (isFabric(change.split("\n")[0])) return;
    if (isTurboModules(change.split("\n")[0])) return;
    if (isInternal(change.split("\n")[0])) return;

    if (isAdded(change)) {
      if (isAndroidCommit(change)) {
        acc.added.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.added.ios.push(message);
      } else {
        acc.added.general.push(message);
      }
    } else if (isChanged(change)) {
      if (isAndroidCommit(change)) {
        acc.changed.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.changed.ios.push(message);
      } else {
        acc.changed.general.push(message);
      }
    } else if (isFixed(change)) {
      if (isAndroidCommit(change)) {
        acc.fixed.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.fixed.ios.push(message);
      } else {
        acc.fixed.general.push(message);
      }
    } else if (isRemoved(change)) {
      if (isAndroidCommit(change)) {
        acc.removed.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.removed.ios.push(message);
      } else {
        acc.removed.general.push(message);
      }
    } else if (isDeprecated(change)) {
      if (isAndroidCommit(change)) {
        acc.deprecated.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.deprecated.ios.push(message);
      } else {
        acc.deprecated.general.push(message);
      }
    } else if (isSecurity(change)) {
      if (isAndroidCommit(change)) {
        acc.security.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.security.ios.push(message);
      } else {
        acc.security.general.push(message);
      }
    } else {
      if (isAndroidCommit(change)) {
        acc.unknown.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.unknown.ios.push(message);
      } else {
        acc.unknown.general.push(message);
      }
    }
  });

  return acc;
}

function buildMarkDown(data) {
  return `

## [${compare.replace(/^v/, '')}]

### Added

${data.added.general.join("\n")}

#### Android specific

${data.added.android.join("\n")}

#### iOS specific

${data.added.ios.join("\n")}

### Changed

${data.changed.general.join("\n")}

#### Android specific

${data.changed.android.join("\n")}

#### iOS specific

${data.changed.ios.join("\n")}

### Deprecated

${data.deprecated.general.join("\n")}

#### Android specific

${data.deprecated.android.join("\n")}

#### iOS specific

${data.deprecated.ios.join("\n")}

### Removed

${data.removed.general.join("\n")}

#### Android specific

${data.removed.android.join("\n")}

#### iOS specific

${data.removed.ios.join("\n")}

### Fixed

${data.fixed.general.join("\n")}

#### Android specific

${data.fixed.android.join("\n")}

#### iOS specific

${data.fixed.ios.join("\n")}

### Security

${data.security.general.join("\n")}

#### Android specific

${data.security.android.join("\n")}

#### iOS specific

${data.security.ios.join("\n")}

### Unknown

${data.unknown.general.join("\n")}

#### Android Unknown

${data.unknown.android.join("\n")}

#### iOS Unknown

${data.unknown.ios.join("\n")}
`;
}

function validateVersions(b, c) {
  if(b === c) {
    throw new Error("Base and compare versions are the same, but this makes no sense. Perhaps the latest version is already present in the changelog?");
  }
}

// MAIN
(async () => {
if (!compare) {
    compare = "v" + await latestVersion("react-native");
}
if (!base) {
    const rows = fs.readFileSync('CHANGELOG.md', 'UTF-8');
    const changelog = parser(rows.slice(0,100)); // We dont follow keep-a-changelog closely enough for the parser to tolerate our actual content; slice it down to the first 100 chars to avoid that issue
    base = "v" + changelog.releases[0].version;
    // console.log(base);
}
try {
validateVersions(base, compare);
} catch(e) {
  console.error(e.message);
  process.exit(1);
  };

const path = "/repos/facebook/react-native/compare/" + base + "..." + compare;

fetchJSON(
  "api.github.com",
  path
)
  .then(data => data.commits)
  .then(filterCICommits)
  .then(filterRevertCommits)
  .then(getChangelogDesc)
  .then(buildMarkDown)
  .then(data => console.log(data))
  .catch(e => console.error(e));

  })();