/**
 * mentions-regex <https://github.com/regexps/mentions-regex>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

module.exports =  function metntionsRegex(opts) {
  opts = opts || {};

  var startSpace = opts.startSpace === false ? '' : '(?:\\s+)';
  var endSpace = opts.endSpace === false ? '' : '(?:\\s+)';
  var length = '{1,' + (opts.length || 30) + '}';
  var match = opts.match || '\\w' + length;

  match = opts.dot && !opts.match ? '[A-Za-z0-9_.]' + length : match

  return new RegExp(startSpace + '@(' + match + ')' + endSpace, opts.flags);
};
