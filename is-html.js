/*!
	is-html
	Check if a string is HTML
	https://github.com/sindresorhus/is-html
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';
	var m = typeof module !== 'undefined' && module.exports;

	if (m) {
		var htmlTags = require('html-tags');
	}

	function isHtml(str) {
		if (/\s?<!doctype html>|(<html[^>]*>|<body[^>]*>|<x-[^>]+>)+/i.test(str)) {
			return true;
		}

		var re = new RegExp(htmlTags.map(function (el) {
			return '<' + el + '[^>]*>';
		}).join('|'), 'i');

		if (re.test(str)) {
			return true;
		}

		return false;
	}

	if (m) {
		module.exports = isHtml;
	} else {
		window.isHtml = isHtml;
	}
})();
