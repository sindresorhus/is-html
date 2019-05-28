import test from 'ava';
import isHtml from '.';

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
