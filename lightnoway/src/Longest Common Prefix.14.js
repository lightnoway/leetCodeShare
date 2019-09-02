// 14. 最长公共前缀 - 力扣（LeetCode）
// https://leetcode-cn.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
export default function fn(strs) {
	if (strs.length === 0) return '';
	if (strs.length === 1) return strs[0];
	let result = '';
	const firstStr = strs[0];
	const others = strs.slice(1);
	for (let i = 0, first; ; i++) {
		if (i >= firstStr.length) return result;
		first = firstStr[i];
		for (let str of others) {
			if ((i >= str.length) || str[i] !== first) return result;
		}
		result += first;
	}
}

// console.log('=====',fn(["flower","flow","flight"]));