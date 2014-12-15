/**
 * mentions-regex <https://github.com/tunnckoCore/mentions-regex>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var mentionsRegex = require('./index');
var str = '@first github @tunnckoCore and @face some @al.so email@here.com global @last'
var res = str.match(mentionsRegex({flags: 'g', startSpace: false}))
console.log(res)
