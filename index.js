import htmlTags from 'html-tags';

const basic = /\s?<!doctype html>|(<html\b[^>]*>|<body\b[^>]*>|<x-[^>]+>)+/i;
const full = new RegExp(htmlTags.map(tag => `<${tag}\\b[^>]*>`).join('|'), 'i');

export default function isHtml(string) {
	// We limit it to a reasonable length to improve performance.
	string = string.trim().slice(0, 1000);

	return basic.test(string) || full.test(string);
}
