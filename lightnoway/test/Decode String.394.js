import fn from '../src/Decode String.394';

test('Decode String.394', () => {
	const test = [
		["3[a]2[bc]", "aaabcbc"],
		["3[a2[c]]", "accaccacc"],
		["2[abc]3[cd]ef", "abcabccdcdcdef"],
		["3[a2[c]bc]", "accbcaccbcaccbc"],
	]
	for (let t of test) {
		expect(fn(t[0])).toEqual(t[1]);
	}
});