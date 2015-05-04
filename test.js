/**
 * mentions-regex <https://github.com/regexps/mentions-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var test = require('assertit')
var regexp = require('./index')
var fixtures = require('./fixtures')

function reMatch (str, dot) {
  var ex = regexp(dot).exec(str)
  return ex && ex[1] || null
}

function reTest (str, dot) {
  return regexp(dot).test(str)
}

test('mentions-regex:', function () {
  test('when `dot` is true', function () {
    test('should match `google.com` from `foo @google.com bar`', function (done) {
      test.equal(reMatch('foo @google.com bar', true), 'google.com')
      test.equal(reTest('foo @google.com bar', true), true)
      done()
    })

    test('should not match when `foo@bar.com qux`', function (done) {
      test.equal(reMatch('foo@bar.com qux', true), null)
      test.equal(reTest('foo@bar.com qux', true), false)
      done()
    })
  })

  test('when `dot` is falsey value', function () {
    test('should match `google` from `foo @google.com bar`', function (done) {
      test.equal(reMatch('foo @google.com bar', false), 'google')
      test.equal(reTest('foo @google.com bar', false), true)
      done()
    })

    test('should not match when `foo@bar.com qux`', function (done) {
      test.equal(reMatch('foo@bar.com qux', false), null)
      test.equal(reTest('foo@bar.com qux', false), false)
      done()
    })
  })

  test('special cases', function () {
    test('should match `bar_baz` from `foo @bar_baz qux`', function (done) {
      test.equal(reMatch('foo @bar_baz qux'), 'bar_baz')
      test.equal(reTest('foo @bar_baz qux'), true)
      done()
    })

    test('should match `_bar_baz` from `foo @_bar_baz qux`', function (done) {
      test.equal(reMatch('foo @_bar_baz qux'), '_bar_baz')
      test.equal(reTest('foo @_bar_baz qux'), true)
      done()
    })

    test('should match `_bar` from `foo @_bar baz qux`', function (done) {
      test.equal(reMatch('foo @_bar baz qux'), '_bar')
      test.equal(reTest('foo @_bar baz qux'), true)
      done()
    })

    test('should match `bar/baz` from `foo @bar/baz qux`', function (done) {
      test.equal(reMatch('foo @bar/baz qux'), 'bar/baz')
      test.equal(reTest('foo @bar/baz qux'), true)
      done()
    })

    test('should match `bar/baz` from `foo /@bar/baz qux`', function (done) {
      test.equal(reMatch('foo /@bar/baz qux'), 'bar/baz')
      test.equal(reTest('foo /@bar/baz qux'), true)
      done()
    })

    test('should match `bar` from `foo /@bar baz qux`', function (done) {
      test.equal(reMatch('foo /@bar baz qux'), 'bar')
      test.equal(reTest('foo /@bar baz qux'), true)
      done()
    })

    test('should match `222` from `foo @222 baz qux`', function (done) {
      test.equal(reMatch('foo @222 baz qux'), '222')
      test.equal(reTest('foo @222 baz qux'), true)
      done()
    })

    test('should not match from `foo @/bar/baz qux`', function (done) {
      test.equal(reMatch('foo @/bar/baz qux'), null)
      test.equal(reTest('foo @/bar/baz qux'), false)
      done()
    })

    test('should not match from `foo @/bar baz qux`', function (done) {
      test.equal(reMatch('foo @/bar baz qux'), null)
      test.equal(reTest('foo @/bar baz qux'), false)
      done()
    })

    test('should not match email addresses `foo@bar.com`', function (done) {
      test.equal(reMatch('foo@bar.com'), null)
      test.equal(reTest('foo@bar.com'), false)
      done()
    })
  })

  test('should match `bar` only', function () {
    fixtures.shouldMatchBarOnly.forEach(function _each (item) {
      test('from `' + item + '` string given', function (done) {
        test.equal(reMatch(item), 'bar')
        test.equal(reTest(item), true)
        done()
      })
    })
  })

  test('should not match', function () {
    fixtures.shouldNotMatch.forEach(function _each (item) {
      test('from `' + item + '` string given', function (done) {
        test.equal(reMatch(item), null)
        test.equal(reTest(item), false)
        done()
      })
    })
  })
})
