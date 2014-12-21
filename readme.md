## [![npm versi][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![deps status][daviddm-img]][daviddm-url] [![regexps org][regexps-img]][regexps-url] 

> The correct mention(s) regex. Regular expression for twitter, facebook, github, etc user mentions

## Install
```bash
$ npm install mentions-regex
$ npm test
```


## [.metntionsRegex](index.js#L16)
> Default regex is `\s+@(\w{1,30})\s+`

* `[options]` **{Object}**
  - `startSpace` **{Boolean}** if `false`, will remove starting `\s+` from regex
  - `endSpace` **{Boolean}** if `false`, will remove ending `\s+` from regex
  - `length` **{Number}** maximum length of mention, default `30`
  - `match` **{String}** what to match, default is `\w{1,30}`
  - `flags` **{String}** every valid RegExp flag, default `undefined`
  - `dot` **{Boolean}** will use `[A-Za-z0-9_.]` instead of `\w`
* `return` **{RegExp}**


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

var str = '@first git @tunnckoCore and @face some @al.so email@here.com glob @last'

str.match(mentionsRegex())
//=> [' @tunnckoCore ']

str.match(mentionsRegex({flags: 'g'}))
//=> [' @tunnckoCore ', ' @face ']

str.match(mentionsRegex({flags: 'g', startSpace: false}))
//=> ['@first ', '@tunnckoCore ', '@face ']

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

str.match(mentionsRegex({flags: 'g', dot: true, startSpace: false}))
//=> ['@first ', '@tunnckoCore ', '@face ', '@al.so ', '@here.com ']

str.match(mentionsRegex({flags: 'g', dot: true, startSpace: false, endSpace: false}))
//=> ['@first', '@tunnckoCore', '@face', '@al.so', '@here.com ', '@last']
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/mentions-regex
[npmjs-img]: https://img.shields.io/npm/v/mentions-regex.svg?style=flat&label=mentions-regex

[coveralls-url]: https://coveralls.io/r/regexps/mentions-regex?branch=master
[coveralls-img]: https://img.shields.io/coveralls/regexps/mentions-regex.svg?style=flat

[license-url]: https://github.com/regexps/mentions-regex/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/regexps/mentions-regex
[travis-img]: https://img.shields.io/travis/regexps/mentions-regex.svg?style=flat

[daviddm-url]: https://david-dm.org/regexps/mentions-regex
[daviddm-img]: https://img.shields.io/david/dev/regexps/mentions-regex.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/regexps/mentions-regex/graphs/contributors

[regexps-url]: https://github.com/regexps
[regexps-img]: http://img.shields.io/badge/regexps-approved-brightgreen.svg?style=flat

***

_Powered and automated by [readdirp + hogan.js](https://github.com/tunnckoCore), December 21, 2014_



