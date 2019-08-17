/**
 * @param {string} s
 * @return {number}
 */
// var countBinarySubstrings = function(s) {
//     let cur=null,repeat = 0,result = 0;
//     for(let i=0,len = s.length;i<len;i++){
//         const num = s[i];
//         if(num!==cur){
//             repeat = 1; 
//             cur = num;
//         } else{
//             repeat++; 
//         }

//         //assert subStr;
//         const otherNum = num === '0'?'1':'0' ;
//         for(let j=repeat;j>0;j--){
//             if(s.substr(i+1,j) === otherNum.repeat(j)){
//                 result++;
//             }
//         }
//     }
//     return result;
// };


/**
 * @param {string} s
 * @return {number}
 */
module.exports = function countBinarySubstrings(s) {
	let cur = null,
		repeat = 0,
		preRepeat = 0,
		result = 0;
	for (let num of s) {
		if (num !== cur) {
			cur = num;


			result += Math.min(repeat, preRepeat);
			preRepeat = repeat;
			repeat = 1;
		} else {
			repeat++;
		}
	}
	result += Math.min(repeat, preRepeat);
	return result;
};

/**
技巧
1
result += Math.min(repeat,preRepeat);
可改为
if(repeat <=preRepeat) result++;

2
可以用正则思路实现
  正则来找重复
  正则 判断是 0011
*/