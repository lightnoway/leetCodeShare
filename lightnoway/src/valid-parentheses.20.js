// 20. 有效的括号
//https://leetcode-cn.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
export default function(s) {
	const stack = [];
	const operators = ['()', '{}', '[]'].reduce((result, cur) => {
		result[cur[0]] = () => {
			stack.push(cur[0]);
			return true;
		};
		result[cur[1]] = () => {
			return cur[0] === stack.pop();
		}
		return result;
	}, {});
	for (const c of s) {
		if (operators[c]) {
			if (!operators[c]()) return false;
		}
	}
	return stack.length === 0;
}