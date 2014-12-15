# mentions-regex [![NPM version][npmjs-img]][npmjs-url] [![Build Status][travis-img]][travis-url] [![regexps org][regexps-img]][regexps-url]
> The correct mention(s) regex. Regex done right!


## Install [![Nodei.co stats][npmjs-ico]][npmjs-url] 
> Install with [npm](https://npmjs.org)

```
$ npm install mentions-regex
$ npm test
```


## Usage
> For more use-cases see [tests](./test.js)

```js
var mentionsRegex = require('mentions-regex');

mentionsRegex().test('github @tunnckoCore')
//=> false

mentionsRegex({flags: 'g'}).test('github @tunnckoCore')
//=> false

mentionsRegex({endSpace: false}).test('github @tunnckoCore')
//=> true

var str = '@first github @tunnckoCore and @face some @al.so email@here.com global @last'

str.match(mentionsRegex())
//=> [' @tunnckoCore ']

str.match(mentionsRegex({flags: 'g'}))
//=> [' @tunnckoCore ', ' @face ']

str.match(mentionsRegex({flags: 'g', startSpace: false}))
//=> [' @tunnckoCore ', ' @face ', '@face ']

str.match(mentionsRegex({flags: 'g', endSpace: false}))
//=> [' @tunnckoCore ', ' @face ', ' @al', ' @last']

str.match(mentionsRegex({flags: 'g', startSpace: false, endSpace: false}))
//=> ['@first', '@tunnckoCore', '@face', '@al', '@here', '@last']

str.match(mentionsRegex({length: 5}))
//=> [' @face ']

str.match(mentionsRegex({flags: 'g', dot: true}))
//=> [' @tunnckoCore ', ' @face ', ' @al.so ']

str.match(mentionsRegex({flags: 'g', dot: true, length: 5}))
//=> [' @face ', ' @al.so ']
```


## [.metntionsRegex](index.js#L16)
> Default regex is `\s+@(\w{1,30}|[A-Za-z0-9_.]{1,30})\s+`

* `[options]` **{Object}**
  - `startSpace` **{Boolean}** if `false`, will remove starting `\s+` from regex
  - `endSpace` **{Boolean}** if `false`, will remove ending `\s+` from regex
  - `length` **{Number}** maximum length of mention, default `30`
  - `match` **{String}** what to match, default is `\w{1,30}`
  - `flags` **{String}** every valid RegExp flag, default `undefined`
  - `dot` **{Boolean}** replace options.match which is `\w` with `[A-Za-z0-9_.]`
* `return` **{RegExp}**


## Authors & Contributors
**Charlike Mike Reagent** [![author tips][author-gittip-img]][author-gittip]
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/mentions-regex
[npmjs-img]: http://img.shields.io/npm/v/mentions-regex.svg
[npmjs-ico]: https://nodei.co/npm/mentions-regex.svg?mini=true

[coveralls-url]: https://coveralls.io/r/regexps/mentions-regex?branch=master
[coveralls-img]: https://img.shields.io/coveralls/regexps/mentions-regex.svg

[license-url]: https://github.com/regexps/mentions-regex/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/regexps/mentions-regex
[travis-img]: https://travis-ci.org/regexps/mentions-regex.svg

[depstat-url]: https://david-dm.org/regexps/mentions-regex
[depstat-img]: https://david-dm.org/regexps/mentions-regex.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/regexps/mentions-regex/graphs/contributors

[regexps-img]: http://img.shields.io/badge/regexps-approved-brightgreen.svg
[regexps-url]: https://github.com/regexps