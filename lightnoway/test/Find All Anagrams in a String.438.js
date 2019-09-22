import fn from '../src/Find All Anagrams in a String.438';

test('Find All Anagrams in a String.438', () => {
	const test = [
		["cbaebabacd", "abc",[]] 
	]
	for (let t of test) {
		expect(fn(t[0],t[1])).toEqual(t[2]);
	}
});