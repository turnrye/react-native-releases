#!/usr/bin/env node

"use strict";

const levenshtein = require("fast-levenshtein");
const gitlog = require("gitlog");

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
  entry = entry.replace(/\.$/, ""); //Remove trailing period if there is one
  entry = entry.replace(/^- /, ""); //Remove leading dash if there is one
  const authorSection = `([${item.sha.slice(
    0,
    7
  )}](https://github.com/facebook/react-native/commit/${item.sha.slice(0, 7)})${
    item.author
      ? " by [" + item.author.name + "](mailto:" + item.author.email + ")"
      : ""
  })`;
  return `${entry} ${authorSection}`;
}

function getChangelogDesc(commits) {
  const acc = {
    added: { android: [], ios: [], general: [] },
    changed: { android: [], ios: [], general: [] },
    deprecated: { android: [], ios: [], general: [] },
    removed: { android: [], ios: [], general: [] },
    fixed: { android: [], ios: [], general: [] },
    security: { android: [], ios: [], general: [] }
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
        acc.changed.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.changed.ios.push(message);
      } else {
        acc.changed.general.push(message);
      }
    }
  });

  return acc;
}

function getCommitLog(base, head) {
  return new Promise((resolve, reject) => {
    const options = {
      repo: __dirname + "/react-native",
      fields: ["hash", "abbrevHash", "rawBody", "authorName", "authorEmail"],
      number: 2000,
      branch: base + ".." + head
    };
    let commits;
    try {
      commits = gitlog(options).map(commit => ({
        commit: { message: commit.rawBody },
        sha: commit.hash,
        author: { name: commit.authorName, email: commit.authorEmail }
      }));
    } catch (e) {
      throw new Error(
        "Unable to get diff using local workspace; see underlying error above."
      );
    }
    resolve(commits);
  });
}

module.exports = {
  parse: function(base, compare) {
    return getCommitLog(base, compare)
      .then(filterCICommits)
      .then(filterRevertCommits)
      .then(getChangelogDesc);
  }
};
