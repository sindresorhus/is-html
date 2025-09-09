import test from 'ava';
import isHtml from './index.js';

test('detect HTML if it has doctype', t => {
	t.true(isHtml('<!doctype html>'));
	t.true(isHtml('\n\n<!doctype html><html>'));
});

test('detect HTML if it has <html>, <body> or <x-*>', t => {
	t.true(isHtml('<html>'));
	t.true(isHtml('<html></html>'));
	t.true(isHtml('<html lang="en"></html>'));
	t.true(isHtml('<html><body></html>'));
	t.true(isHtml('<html><body class="no-js"></html>'));
	t.true(isHtml('<x-unicorn>'));
});

test('detect HTML if it contains any of the standard HTML tags', t => {
	t.true(isHtml('<p>foo</p>'));
	t.true(isHtml('<a href="#">foo</a>'));
});

test('not match XML', t => {
	t.false(isHtml('<cake>foo</cake>'));
	t.false(isHtml('<any>rocks</any>'));
	t.false(isHtml('<htmly>not</htmly>'));
	t.false(isHtml('<bodyx>not</bodyx>'));
});

test('not match binary files with null bytes', t => {
	t.false(isHtml('binary\0data'));
	t.false(isHtml('\0<html>'));
	t.false(isHtml('<html>\0</html>'));
	t.false(isHtml('some text before\0<p>HTML-like content</p>'));
});

test('not match PDF files', t => {
	t.false(isHtml('%PDF-1.4\n\0<html>test</html>'));
	t.false(isHtml('%PDF-1.5\nsome binary\0content<br>'));
});

test('not match image files with HTML-like patterns', t => {
	t.false(isHtml('\u0089PNG\r\n\u001A\n\0<br>'));
	t.false(isHtml('\u00FF\u00D8\u00FF\u00E0\0<p>test</p>'));
	t.false(isHtml('GIF89a\0<div>content</div>'));
});
