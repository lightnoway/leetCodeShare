import fn from '../src/valid-parentheses.20'

test('20. 有效的括号', () => {
	expect(fn('()')).toEqual(true);
	expect(fn('()[]{}')).toEqual(true);
	expect(fn('(]')).toEqual(false);
	expect(fn('([)]')).toEqual(false);
	expect(fn('{[]}')).toEqual(true);
});