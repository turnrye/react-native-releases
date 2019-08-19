#!/usr/bin/env node

"use strict";

const latestVersion = require("latest-version");
const { parser } = require("keep-a-changelog");
const semver = require("semver");
const fs = require("fs");
var Git = require("nodegit");
const { parse } = require("./commit-parser.js");
const { buildMarkDown } = require("./build-markdown.js");
const argv = require("yargs");

function validateVersions(b, c) {
  if (b === c) {
    throw new Error(
      "Base and compare versions are the same, but this makes no sense. Perhaps the latest version is already present in the changelog?"
    );
  }
  if (semver.gt(semver.coerce(b), semver.coerce(c))) {
    throw new Error(
      "Base is newer than the compare version; perhaps it's already been run?"
    );
  }
}
function presumeBaseFromChangelog() {
  const rows = fs.readFileSync("../CHANGELOG.md", "UTF-8");
  const changelog = parser(rows.slice(0, 100)); // We dont follow keep-a-changelog closely enough for the parser to tolerate our actual content; slice it down to the first 100 chars to avoid that issue
  const base = "v" + changelog.releases[0].version;
  console.warn("Using base version " + base + " from the top of the changelog");
  return base;
}
async function presumeCompareFromGit() {
  let repo, branches;
  try {
    repo = await Git.Repository.open(__dirname + "/react-native");
  } catch (e) {
    throw new Error(
      "Unable to open local React Native workspace; is it checked out in the `./react-native` directory?"
    );
  }
  try {
    branches = await repo.getReferenceNames(Git.Reference.TYPE.ALL);
  } catch (e) {
    throw new Error(
      "Unable to get React Native branches from your local ./react-native directory; is it checked out and is Git installed?"
    );
  }
  let highest = "0.1.0";
  branches = branches
    .filter(entry => entry.match(/refs\/heads.*-stable/))
    .map(entry => entry.replace(/refs\/heads\//, ""));
  branches.forEach(branch => {
    if (semver.gte(semver.coerce(branch), semver.coerce(highest)))
      highest = branch;
  });
  return highest;
}

// MAIN
(async () => {
  argv
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
      head: {
        alias: "h",
        describe:
          "the new version branch or tag (most often, this is the release candidate); if omitted, first NPM tags are tried, then it falls back to the highest -stable branch",
        demandOption: false
      },
      out: {
        alias: "o",
        describe: "optionally, write the output to a file",
        demandOption: false
      }
    })
    .version(false)
    .help("help").argv;

  let { base, compare, out } = argv.argv;
  // console.log(argv.argv);
  if (!base) {
    base = presumeBaseFromChangelog();
  }
  if (!compare) {
    compare = await presumeCompareFromGit();
  }
  console.warn("Generating changelog between " + base + " and " + compare);
  try {
    validateVersions(base, compare);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }

  parse(base, compare)
    .then(data => buildMarkDown(semver.coerce(compare), data))
    .then(data => {
      if (out) {
        fs.writeFileSync(out, data, 'utf8');
      } else {
        console.log(data);
      }
    })
    .catch(e => console.error(e.message));
})();
