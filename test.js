/**
 * mentions-regex <https://github.com/tunnckoCore/mentions-regex>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var mentionsRegex = require('./index');
var str = 'some @mention as @he.re a@nd @second ols @He-wee more @men.tion'

console.log(str.match(mentionsRegex({flags: 'g'})))
