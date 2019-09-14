// 20. 有效的括号
//https://leetcode-cn.com/problems/decode-string
/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function (s) {
// 	let stack = [];
// 	let argNum = 1, argStr = "";
// 	let status = 'str';//str
// 	for (let c of s) {
// 		if (c >= '0' && c <= '9') {
// 			if (status === 'str') {
// 				stack.push([argNum, argStr]);
// 				status = 'num';
// 				argNum = '';
// 			}
// 			argNum += c;
// 		} else if (c === '[') {
// 			argNum = parseInt(argNum, 10);
// 			status = "str";
// 			argStr = "";
// 		} else if (c === ']') {
// 			const str = argStr.repeat(argNum);
// 			[argNum, argStr] = stack.pop();
// 			argStr += str;
// 			status = "str";
// 		} else {
// 			argStr += c;
// 		}
// 	}
// 	return argStr;
// };

//消去status
var decodeString = function (s) {
	let stack = [];
	let argNum = "", argStr = "";
	for (let c of s) {
		if (c >= '0' && c <= '9') {
			argNum += c;
		} else if (c === '[') {
			stack.push([parseInt(argNum, 10), argStr]);
			argNum = "";
			argStr = "";
		} else if (c === ']') {
			const [repeat, lastStr] = stack.pop();
			argStr = lastStr + argStr.repeat(repeat); 
			argNum = "";
		} else {
			argStr += c;
		}
	}
	return argStr;
};

export default decodeString;