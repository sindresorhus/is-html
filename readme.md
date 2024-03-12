# is-html

> Check if a string is HTML

You should not use this for any kind of validation, sanitation, or XSS checks.

## Install

```sh
npm install is-html
```

## Usage

```js
import isHtml from 'is-html';

isHtml('<p>I am HTML</p>');
//=> true

isHtml('<!doctype><html><body><h1>I ❤ unicorns</h1></body></html>');
//=> true

isHtml('<cake>I am XML</cake>');
//=> false

isHtml('>+++++++>++++++++++>+++>+<<<<-');
//=> false
```

Note: It does not detect deprecated HTML tags.
