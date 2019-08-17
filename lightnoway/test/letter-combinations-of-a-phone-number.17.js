import fn from '../src/letter-combinations-of-a-phone-number.17';

test('23', () => {
	expect(fn('23').sort()).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].sort());
});