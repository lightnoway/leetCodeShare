// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// 17. 电话号码的字母组合
const dic = {
	2: 'abc',
	3: 'def',
	4: 'ghi',
	5: 'jkl',
	6: 'mno',
	7: 'pqrs',
	8: 'tuv',
	9: 'wxyz'
};
export default function letterCombinations(digits) {
	let result = [];
	for (const num of digits) {
		const pre = result;
		result = [];
		for (const c of dic[num]) {
			if (pre.length > 0) {
				for (const exist of pre) {
					result.push(exist + c);
				}
			} else {
				result.push(c);
			}
		}
	}
	return result;
}