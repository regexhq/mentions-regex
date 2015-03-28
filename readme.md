## [![npm versi][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coveralls img][coveralls-img]][coveralls-url]  [![deps status][daviddm-img]][daviddm-url]

> 100% twitter compatible `@mentions` regex! Regular expression for matching `@username` mentions, as used on twitter, facebook, github, etc.

## Install
```
npm i --save mentions-regex
npm test
```


## [metntionsRegex](index.js#L17)
> Compatible twitter mentions regex, not only of course!

* `[dot]` **{Boolean}** if `true` it will allow to match dots
* `return` **{RegExp}**


## Usage
> For more use-cases see [tests](./test.js)

```js
var metntionsRegex = require('metntions-regex');

metntionsRegex().test('foo @bar baz');
//=> true

metntionsRegex().exec('foo @bar baz')[1];
//=> 'bar'

metntionsRegex().test('foo email@bar.com baz');
//=> false

metntionsRegex(true).test('foo email@bar.com baz');
//=> false

metntionsRegex(true).test('foo @bar.com baz');
//=> true

metntionsRegex(true).exec('foo @bar.com baz')[1];
//=> 'bar.com'
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
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

_Proudly generated with [docks(1)](https://github.com/tunnckoCore) on March 28, 2015_



