/**
 * mentions-regex <https://github.com/regexps/mentions-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

/**
 * Compatible twitter mentions regex, not only of course!
 *
 * @name   mentionsRegex
 * @param  {Boolean} `dot` if `true` it will allow to match dots
 * @return {RegExp}
 * @api public
 */
module.exports = function mentionsRegex (dot) {
  if (dot) {
    // e.g. @google.com will match `google.com`
    return /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_.]{1,15})(?:\b(?!@|＠)|$)/
  }
  // e.g. @google.com will match `google`
  return /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_]{1,15})(?:\b(?!@|＠)|$)/
}
