/**
 * mentions-regex <https://github.com/regexps/mentions-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

module.exports = function mentionsRegex(nodot) {
  if (nodot) {
    return /(?:^|[^＠@*!%$&#0-9A-Za-z_])[＠@](?!(?!\.))([0-9A-Za-z_]{1,15})/;
  }
  return /(?:^|[^＠@*!%$&#0-9A-Za-z_])[＠@]([0-9A-Za-z_\.]{1,15})/;
};
