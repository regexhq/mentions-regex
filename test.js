/**
 * mentions-regex <https://github.com/regexps/mentions-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var regexp = require('./index');
var fixtures = require('./fixtures');

function match(str, dot) {
  var ex = regexp(dot).exec(str);
  return ex && ex[1] || null;
}

function test(str, dot) {
  return regexp(dot).test(str);
}

describe('mentions-regex:', function() {
  describe('when `dot` is true', function() {
    it('should match `google.com` from `foo @google.com bar`', function(done) {
      assert.strictEqual(match('foo @google.com bar', true), 'google.com');
      assert.strictEqual(test('foo @google.com bar', true), true);
      done();
    });

    it('should not match when `foo@bar.com qux`', function(done) {
      assert.strictEqual(match('foo@bar.com qux', true), null);
      assert.strictEqual(test('foo@bar.com qux', true), false);
      done();
    });
  });

  describe('when `dot` is falsey value', function() {
    it('should match `google` from `foo @google.com bar`', function(done) {
      assert.strictEqual(match('foo @google.com bar', false), 'google');
      assert.strictEqual(test('foo @google.com bar', false), true);
      done();
    });

    it('should not match when `foo@bar.com qux`', function(done) {
      assert.strictEqual(match('foo@bar.com qux', false), null);
      assert.strictEqual(test('foo@bar.com qux', false), false);
      done();
    });
  });

  describe('special cases', function() {
    it('should match `bar_baz` from `foo @bar_baz qux`', function(done) {
      assert.strictEqual(match('foo @bar_baz qux'), 'bar_baz');
      assert.strictEqual(test('foo @bar_baz qux'), true);
      done();
    });

    it('should match `_bar_baz` from `foo @_bar_baz qux`', function(done) {
      assert.strictEqual(match('foo @_bar_baz qux'), '_bar_baz');
      assert.strictEqual(test('foo @_bar_baz qux'), true);
      done();
    });

    it('should match `_bar` from `foo @_bar baz qux`', function(done) {
      assert.strictEqual(match('foo @_bar baz qux'), '_bar');
      assert.strictEqual(test('foo @_bar baz qux'), true);
      done();
    });

    it('should match `bar/baz` from `foo @bar/baz qux`', function(done) {
      assert.strictEqual(match('foo @bar/baz qux'), 'bar/baz');
      assert.strictEqual(test('foo @bar/baz qux'), true);
      done();
    });

    it('should match `bar/baz` from `foo /@bar/baz qux`', function(done) {
      assert.strictEqual(match('foo /@bar/baz qux'), 'bar/baz');
      assert.strictEqual(test('foo /@bar/baz qux'), true);
      done();
    });

    it('should match `bar` from `foo /@bar baz qux`', function(done) {
      assert.strictEqual(match('foo /@bar baz qux'), 'bar');
      assert.strictEqual(test('foo /@bar baz qux'), true);
      done();
    });

    it('should match `222` from `foo @222 baz qux`', function(done) {
      assert.strictEqual(match('foo @222 baz qux'), '222');
      assert.strictEqual(test('foo @222 baz qux'), true);
      done();
    });

    it('should not match from `foo @/bar/baz qux`', function(done) {
      assert.strictEqual(match('foo @/bar/baz qux'), null);
      assert.strictEqual(test('foo @/bar/baz qux'), false);
      done();
    });

    it('should not match from `foo @/bar baz qux`', function(done) {
      assert.strictEqual(match('foo @/bar baz qux'), null);
      assert.strictEqual(test('foo @/bar baz qux'), false);
      done();
    });

    it('should not match email addresses `foo@bar.com`', function(done) {
      assert.strictEqual(match('foo@bar.com'), null);
      assert.strictEqual(test('foo@bar.com'), false);
      done();
    });
  });

  describe('should match `bar` only', function() {
    fixtures.shouldMatchBarOnly.forEach(function _each(item) {
      it('from `' + item + '` string given', function(done) {
        assert.strictEqual(match(item), 'bar');
        assert.strictEqual(test(item), true);
        done();
      });
    });
  });

  describe('should not match', function() {
    fixtures.shouldNotMatch.forEach(function _each(item) {
      it('from `' + item + '` string given', function(done) {
        assert.strictEqual(match(item), null);
        assert.strictEqual(test(item), false);
        done();
      });
    });
  });
});
