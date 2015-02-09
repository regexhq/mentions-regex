/*!
 * mentions-regex <https://github.com/regexps/mentions-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var mentionsRegex = require('./');

function match(str) {
  return str.match(new RegExp(mentionsRegex().source, 'g'));
}

it('should match mentions in a string', function () {
  assert.deepEqual(match('a @abc @foo xyz @baz'), [' @abc', ' @foo', ' @baz']);
  assert.equal(mentionsRegex().exec('@abc')[1], 'abc');
  assert.equal(mentionsRegex().exec(' @abc')[1], 'abc');
  assert.equal(mentionsRegex().exec(' @abc ')[1], 'abc');
  assert.equal(mentionsRegex().exec('@abc ')[1], 'abc');
  assert.equal(mentionsRegex().exec('@abc.xyz ')[1], 'abc.xyz');
  assert.equal(mentionsRegex().exec('@abc @foo xyz')[1], 'abc');
  assert.equal(mentionsRegex().exec('a @abc @foo xyz')[1], 'abc');
});

it('should match mentions with a dot', function () {
  assert.equal(mentionsRegex().test('@abc.xyz '), true);
  assert.equal(mentionsRegex().exec('@abc.xyz ')[1], 'abc.xyz');
});

it('should not match a dot in a mention when `nodot` is true', function () {
  assert.equal(mentionsRegex(true).test('@abc.xyz '), false);
  assert.equal(mentionsRegex(true).exec('@abc.xyz '), null);
});

it('should not match invalid mentions', function () {
  assert.equal(mentionsRegex().exec('abc @$foo xyz'), null);
  assert.equal(mentionsRegex().exec('abc @!foo xyz'), null);
  assert.equal(mentionsRegex().exec('abc @#foo xyz'), null);
  assert.equal(mentionsRegex().exec('abc @\\foo xyz'), null);
  assert.equal(mentionsRegex().exec('@ abc@foo xyz'), null);
  assert.equal(mentionsRegex().exec('@@abc@foo xyz'), null);
});
