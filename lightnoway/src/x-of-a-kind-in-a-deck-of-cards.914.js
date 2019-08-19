// 914. 卡牌分组
// https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
export default function hasGroupsSizeX(deck) {
	if (deck.length < 2)
		return false;
	const numsCount = {};
	for (let num of deck) {
		if (num in numsCount) {
			numsCount[num]++;
		} else {
			numsCount[num] = 1;
		}
	}
	const counts = Object.values(numsCount);

	if (counts.length === 1) return counts[0] >= 2;
	let a = counts[0];
	for (let i = 1; i < counts.length; i++) {
		a = minM(a, counts[i]);
		if (a < 2) return false;
	}
	return true;
}

function minM(a, b) {
	if (a > b) return minM(b, a);
	let tmp;
	while (b % a !== 0) {
		tmp = b % a;
		b = a;
		a = tmp;
	}
	return a;
}