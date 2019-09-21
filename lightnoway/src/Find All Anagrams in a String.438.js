
//https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function (s, p) {
// 	const result = [];
// 	const nP = p.split('').sort().join('');
// 	for (let i = 0, len = s.length - p.length; i <= len; i++) {
// 		if (nP === s.substr(i, nP.length).split('').sort().join('')) {
// 			result.push(i);
// 		}
// 	}
// 	return result;
// };

//特征比较:特异字母数量相同
var findAnagrams = function (s, p) {
	const result = [];
	const hashS = Object.create(null);
	const hashP = Object.create(null);
	for (let i = 'a'; i <= 'z'; i = String.fromCharCode(i.charCodeAt(0) + 1)) {
		hashS[i] = 0;
		hashP[i] = 0;
	}
	for (let i = 0; i < p.length; i++) {
		hashP[p[i]]++;
		hashS[s[i]]++;
	}
	const nP = JSON.stringify(hashP);
	for (let i = 0, len = s.length - p.length; i <= len; i++) {
		if (JSON.stringify(hashS) === nP) {
			result.push(i);
		}
		hashS[s[i]]--;
		hashS[s[i + p.length]]++;
	}
	return result;
};

export default findAnagrams;