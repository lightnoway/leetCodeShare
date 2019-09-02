import fn from '../src/palindrome-number.9'

test('9. 回文数', () => {
	const map_input_output = new Map();
	map_input_output.set(121, true);
	map_input_output.set(-121, false);
	map_input_output.set(10, false);
	for (const [input, output] of map_input_output) {
		expect(fn(input)).toEqual(output);
	}
});