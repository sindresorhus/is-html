import htmlTags from 'html-tags';

const basic = /\s?<!doctype html>|<html\b[^>]*>|<body\b[^>]*>|<x-[^>]+>/i;

// Sort tags by length for potentially faster matching on common short tags
const sortedTags = [...htmlTags].sort((a, b) => a.length - b.length);

const full = new RegExp(sortedTags.map(tag => `<${tag}\\b[^>]*>`).join('|'), 'i');

export default function isHtml(string) {
	// We limit it to a reasonable length to improve performance.
	string = string.trim().slice(0, 1000);

	// Check for null bytes which indicate binary content.
	// HTML should never contain null bytes.
	if (string.includes('\0')) {
		return false;
	}

	// Early return for strings without '<' character
	if (!string.includes('<')) {
		return false;
	}

	return basic.test(string) || full.test(string);
}
