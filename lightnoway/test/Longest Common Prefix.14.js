import fn from '../src/Longest Common Prefix.14'

test('14.最长公共前缀', () => {
	expect(fn(["flower","flow","flight"])).toEqual("fl");
	expect(fn(["dog","racecar","car"])).toEqual("");
	expect(fn([])).toEqual("");
});