const fn = require('../src/two-sum.1');

test('[2, 7, 11, 15],9', () => {
    expect(fn([2, 7, 11, 15], 9)).toEqual([0, 1]);
});