'use strict';

const basic = /\s?<!doctype html>|(<html\b[^>]*>|<body\b[^>]*>|<x-[^>]+>)+/i;
let full;

module.exports = string =>
	basic.test(string) ||
	(full || (full = new RegExp(require('html-tags').map(tag => `<${tag}\\b[^>]*>`).join('|'), 'i'))).test(string);
