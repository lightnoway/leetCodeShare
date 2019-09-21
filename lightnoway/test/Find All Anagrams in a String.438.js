import fn from '../src/Find All Anagrams in a String.438';

test('Find All Anagrams in a String.438', () => {
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