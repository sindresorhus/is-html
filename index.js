'use strict';

const simple = /^\s*</;
const basic = /\s?<!doctype html>|(<html\b[^>]*>|<body\b[^>]*>|<x-[^>]+>)+/i;
let full;

module.exports = string => simple.test(string) || basic.test(string) || full || (full = new RegExp(require('html-tags').map(tag => `<${tag}\\b[^>]*>`).join('|'), 'i'))
