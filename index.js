/**
 * mentions-regex <https://github.com/regexps/mentions-regex>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

module.exports =  function metntionsRegex(opts) {
  opts = opts || {};

  var space = '(?:\\s+)';
  var dot = opts.dot || false;
  var len = opts.length || 30;
  var length = '{1,' + len + '}';
  var match = opts.match || '\\w' + length;
  var startSpace = opts.startSpace === false ? '' : space;
  var endSpace = opts.endSpace === false ? '' : space;

  match = opts.dot && !opts.match ? '[A-Za-z0-9_.]' + length : match

  return new RegExp(startSpace + '@(' + match + ')' + endSpace, opts.flags);
};
