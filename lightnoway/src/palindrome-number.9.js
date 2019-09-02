// 9. 回文数
//https://leetcode-cn.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
export default function(x) {
	const s = x.toString();
	if (s[0] === '-') return false;
	for (let i = 0, len = s.length, end = len / 2; i < end; i++) {
		if (s[i] !== s[len - 1 - i]) {
			return false
		}
	}
	return true;
}