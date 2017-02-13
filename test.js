import test from 'ava';
import m from '.';

test('detect HTML if it has doctype', t => {
	t.true(m('<!doctype html>'));
	t.true(m('\n\n<!doctype html><html>'));
});

test('detect HTML if it has <html>, <body> or <x-*>', t => {
	t.true(m('<html>'));
	t.true(m('<html></html>'));
	t.true(m('<html lang="en"></html>'));
	t.true(m('<html><body></html>'));
	t.true(m('<html><body class="no-js"></html>'));
	t.true(m('<x-unicorn>'));
});

test('detect HTML if it contains any of the standard HTML tags', t => {
	t.true(m('<p>foo</p>'));
	t.true(m('<a href="#">foo</a>'));
});

test('not match XML', t => {
	t.false(m('<cake>foo</cake>'));
	t.false(m('<any>rocks</any>'));
	t.false(m('<htmly>not</htmly>'));
	t.false(m('<bodyx>not</bodyx>'));
});
