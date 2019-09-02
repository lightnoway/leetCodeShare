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
	const others = strs.slice(1);
	for (let i = 0,len = strs[0].length, first; i<len; i++) { 
		first = strs[0][i];
		for (let str of others) {
			if ((i >= str.length) || str[i] !== first) return result;
		}
		result += first;
	}
	return result;
}

// console.log('=====',fn(["flower","flow","flight"]));