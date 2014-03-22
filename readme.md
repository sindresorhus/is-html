# is-html [![Build Status](https://travis-ci.org/sindresorhus/is-html.svg?branch=master)](https://travis-ci.org/sindresorhus/is-html)

> Check if a string is HTML


## Install

Download [manually](https://github.com/sindresorhus/is-html/releases) or with a package-manager.

```bash
$ npm install --save is-html
```

```bash
$ bower install --save is-html
```

```bash
$ component install sindresorhus/is-html
```


## Usage

```js
var isHtml = require('is-html');

isHtml('<p>I am HTML</p>');
//=> true

isHtml('<!doctype><html><body><h1>I ❤ unicorns</h1></body></html>');
//=> true

isHtml('<cake>I am XML</cake>');
//=> false

isHtml('>+++++++>++++++++++>+++>+<<<<-');
//=> false
```

Can be used with require, global and AMD in the browser.


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
