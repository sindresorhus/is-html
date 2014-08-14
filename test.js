'use strict';
var assert = require('assert');
var isHtml = require('./');

it('should detect HTML if it has doctype', function () {
	assert(isHtml('<!doctype html>'));
	assert(isHtml('\n\n<!doctype html><html>'));
});

it('should detect HTML if it has <html>, <body> or <x-*>', function () {
	assert(isHtml('<html>'));
	assert(isHtml('<html></html>'));
	assert(isHtml('<html lang="en"></html>'));
	assert(isHtml('<html><body></html>'));
	assert(isHtml('<html><body class="no-js"></html>'));
	assert(isHtml('<x-unicorn>'));
});

it('should detect HTML if it contains any of the standard HTML tags', function () {
	assert(isHtml('<p>foo</p>'));
	assert(isHtml('<a href="#">foo</a>'));
});

it('should not match XML', function () {
	assert(!isHtml('<cake>foo</cake>'));
	assert(!isHtml('<any>rocks</any>'));
	assert(!isHtml('<htmly>not</htmly>'));
	assert(!isHtml('<bodyx>not</bodyx>'));
});
