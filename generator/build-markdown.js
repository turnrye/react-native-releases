#!/usr/bin/env node

"use strict";

const { Changelog, Release } = require("keep-a-changelog");

function addEntries(fn, touple) {
  touple.general.forEach(entry => fn(entry));
  touple.android.forEach(entry => fn("[Android] " + entry));
  touple.ios.forEach(entry => fn("[iOS] " + entry));
}

function buildMarkDownViaKeepAChangelog(version, data) {
  let release = new Release(version, false);
  for (const changeType in data) {
    const platforms = data[changeType];
    platforms.general.forEach(entry => release.addChange(changeType, entry));
    platforms.android.forEach(entry =>
      release.addChange(changeType, "[Android] " + entry)
    );
    platforms.ios.forEach(entry =>
      release.addChange(changeType, "[iOS] " + entry)
    );
  }
  return "# Changelog\n" + release.toString();
}


function buildMarkDown(version, data) {
  return `
# Changelog
## ${version} - Unreleased
### Added
${data.added.general.map(entry => "- " + entry).join("\n")}
#### Android specific
${data.added.android.map(entry => "- " + entry).join("\n")}
#### iOS specific
${data.added.ios.map(entry => "- " + entry).join("\n")}
### Changed
${data.changed.general.map(entry => "- " + entry).join("\n")}
#### Android specific
${data.changed.android.map(entry => "- " + entry).join("\n")}
#### iOS specific
${data.changed.ios.map(entry => "- " + entry).join("\n")}
### Deprecated
${data.deprecated.general.map(entry => "- " + entry).join("\n")}
#### Android specific
${data.deprecated.android.map(entry => "- " + entry).join("\n")}
#### iOS specific
${data.deprecated.ios.map(entry => "- " + entry).join("\n")}
### Removed
${data.removed.general.map(entry => "- " + entry).join("\n")}
#### Android specific
${data.removed.android.map(entry => "- " + entry).join("\n")}
#### iOS specific
${data.removed.ios.map(entry => "- " + entry).join("\n")}
### Fixed
${data.fixed.general.map(entry => "- " + entry).join("\n")}
#### Android specific
${data.fixed.android.map(entry => "- " + entry).join("\n")}
#### iOS specific
${data.fixed.ios.map(entry => "- " + entry).join("\n")}
### Security
${data.security.general.map(entry => "- " + entry).join("\n")}
#### Android specific
${data.security.android.map(entry => "- " + entry).join("\n")}
#### iOS specific
${data.security.ios.map(entry => "- " + entry).join("\n")}
`;
}

module.exports = {
  buildMarkDown
};
