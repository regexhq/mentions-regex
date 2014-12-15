/**
 * mentions-regex <https://github.com/tunnckoCore/mentions-regex>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var mentionsRegex = require('./index');
var str = str = '@first git @tunnckoCore and @face some @al.so email@here.com glob @last'
var res = str.match(mentionsRegex({flags: 'g', dot: true, startSpace: false, endSpace: false}))
console.log(res)
