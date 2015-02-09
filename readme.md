## [![npm versi][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![deps status][daviddm-img]][daviddm-url] [![regexps org][regexps-img]][regexps-url] 

> Regular expression for matching `@mentions`, as used on twitter, facebook, github, etc.

## Install

```bash
$ npm i mentions-regex && npm test
```


## Usage

For more use-cases see the [tests](./test.js)

```js
var regex = require('mentions-regex');

regex().test('github @tunnckoCore')
//=> true

regex().exec('github @tunnckoCore');
//=> [ ' @tunnckoCore', 'tunnckoCore', ... ]
```


By default, dots in screen names are invalid:

```js
regex().test('@foo.bar');
//=> false
```

To allow dots, pass `true`:

```js
regex(true).test('@foo.bar');
//=> true
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



