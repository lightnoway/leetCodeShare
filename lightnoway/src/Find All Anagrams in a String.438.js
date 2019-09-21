
//https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
	const result = [];
	const nP=p.split('').sort().join('');
	for(let i=0,len = s.length - p.length;i<=len;i++){
		if(nP === s.substr(i,nP.length).split('').sort().join('')){
			result.push(i);
		}
	}
	return result;
}; 
export default findAnagrams;