// 20. 有效的括号
//https://leetcode-cn.com/problems/decode-string
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	let stack = [];
	let argNum = 1, argStr = "";
	let status = 'str';//str
	for (let c of s) {
		if ('0123456789'.indexOf(c) > -1) {
			if (status === 'str') {
				stack.push([argNum, argStr]);
				status = 'num';
				argNum = '';
			}
			argNum += c;
		} else if (c === '[') {
			argNum = parseInt(argNum, 10);
			status = "str";
			argStr = "";
		} else if (c === ']') {
			const str = argStr.repeat(argNum);
			[argNum, argStr] = stack.pop();
			argStr += str;
			status = "str";
		} else {
			if (status === 'num') {
				argNum = 1;
				status = "str";
			}
			argStr += c;
		}
	}
	return argStr;
};
export default decodeString;