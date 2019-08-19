import fn from '../src/x-of-a-kind-in-a-deck-of-cards.914'
// console.log(__filename);
// console.log(getSrcPath(__filename));
// const srcPath = getSrcPath(__filename);
test('x-of-a-kind-in-a-deck-of-cards', () => {
	expect(fn([1, 2, 3, 4, 4, 3, 2, 1])).toEqual(true);
	expect(fn([1, 1, 1, 1, 2, 2, 2, 2, 2, 2])).toEqual(true);
});