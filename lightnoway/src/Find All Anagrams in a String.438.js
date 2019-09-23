
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
// var findAnagrams = function (s, p) {
// 	const result = [];
// 	const hashS = Object.create(null);
// 	const hashP = Object.create(null);
// 	for (let i = 'a'; i <= 'z'; i = String.fromCharCode(i.charCodeAt(0) + 1)) {
// 		hashS[i] = 0;
// 		hashP[i] = 0;
// 	}
// 	for (let i = 0; i < p.length; i++) {
// 		hashP[p[i]]++;
// 		hashS[s[i]]++;
// 	} 
// 	for (let i = 0, len = s.length - p.length; i <= len; i++) {
// 		if (objEqual(hashS,hashP)) {
// 			result.push(i);
// 		}
// 		hashS[s[i]]--;
// 		hashS[s[i + p.length]]++;
// 	}
// 	return result;
// };
// function objEqual(o1, o2) {
// 	for (let key in o1) {
// 		if (o2[key] !== o1[key]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

//特征比较改进，滑动窗口
//注意matchCount
var findAnagrams = function (s, p) {
	const result = [];
	const hashP = Object.create(null);
	const pLen = p.length
		, sLen = s.length;
	for (let char of p) {
		hashP[char] = (hashP[char] || 0) + 1;
	}
	let left = 0
		, right = 0
		, matchCount = 0;
	while (right < sLen) {
		let rightChar = s[right++];
		if (rightChar in hashP) {
			if (--hashP[rightChar] >= 0) {
				matchCount++;
			}
		}

		while (matchCount === pLen) {
			if (right - left === pLen) {
				result.push(left);
			}
			let leftChar = s[left++];
			if (leftChar in hashP) {
				if (hashP[leftChar]++ >= 0) {
					matchCount--;
				}
			}
		}
	}

	return result;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
	const pHash = Object.create(null);
	for(let c of p){
		pHash[c] = pHash[c]? pHash[c]+1 :1;
	}
  
	let left=0,right=0,matchCount = 0;
	const ret = [];
	while(right < s.length){
		const rC = s[right++];
		if(rC in pHash){
			if(pHash[rC]-->0){
				matchCount++;
			}
		}
		while(matchCount === p.length){
			if(right - left === p.length){
				ret.push(left);
			}
			const lC = s[left++];
			if(lC in pHash){
				if(++pHash[lC]>0){
					matchCount--;
				}
			}
		}
	}
	return ret;
};
export default findAnagrams;