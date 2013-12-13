# is-html [![Build Status](https://secure.travis-ci.org/sindresorhus/is-html.png?branch=master)](http://travis-ci.org/sindresorhus/is-html)

> Check if a string is HTML


## Install

Download [manually](https://github.com/sindresorhus/is-html/releases) or with a package-manager.

#### [npm](https://npmjs.org/package/is-html)

```
npm install --save is-html
```

#### [Bower](http://bower.io)

```
bower install --save is-html
```

#### [Component](https://github.com/component/component)

```
component install sindresorhus/is-html
```


## Example

##### Node.js

```js
var isHtml = require('is-html');
```

##### Bower

```html
<script src="bower_components/is-html/is-html.js"></script>
```

##### Usage

```js
isHtml('<p>I am HTML</p>');
//=> true

isHtml('<!doctype><html><body><h1>I ❤ unicorns</h1></body></html>');
//=> true

isHtml('<cake>I am XML</cake>');
//=> false

isHtml('>+++++++>++++++++++>+++>+<<<<-');
//=> false
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
