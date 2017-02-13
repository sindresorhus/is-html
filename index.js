'use strict';
const htmlTags = require('html-tags');

const basic = /\s?<!doctype html>|(<html\b[^>]*>|<body\b[^>]*>|<x-[^>]+>)+/i;
const full = new RegExp(htmlTags.map(x => `<${x}\\b[^>]*>`).join('|'), 'i');

module.exports = input => basic.test(input) || full.test(input);
