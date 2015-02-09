/**
 * mentions-regex <https://github.com/regexps/mentions-regex>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * The correct mention(s) regex. Regex done right!
 *
 * @param  {Object} `options`
 * @return {RegExp}
 */
module.exports =  function metntionsRegex(options) {
  options = options || {};

  var length = '{1,' + (options.length || 30) + '}';
  var match = options.match || '\\w' + length;

  match = options.dot && !options.match ? '[A-Za-z0-9_.]' + length : match

  return new RegExp('(?!\\b)@(' + match + ')\\b', options.flags);
};
