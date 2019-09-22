
//https://leetcode-cn.com/problems/valid-anagram/
/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	if(s.length !== t.length) return false;
	let hashS=Object.create(null),
		matchCount = 0;
	for(let char of s){
		hashS[char] = hashS[char]?(hashS[char]+1):1;
	}
	for(let char of t){
		if(char in hashS && hashS[char]-- > 0){
			matchCount++;
		}
	}
	return matchCount ===  s.length;
};