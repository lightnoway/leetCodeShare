/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
	let hashS1 = Object.create(null);
	for(let char of s1){
		hashS1[char] = hashS1[char]?hashS1[char]+1:1;
	}
	let left = 0,right=0,matchCount=0;
	while(right < s2.length){
		const rightChar = s2[right++];
		if(rightChar in hashS1){
			if(hashS1[rightChar]-->0){
				matchCount++;
			}
		}
		while(matchCount ===s1.length){
			if(matchCount === right-left){
				return true;
			}
			const leftChar = s2[left++];
			if(leftChar in hashS1){
				if(++hashS1[leftChar]>0){
					matchCount --;
				}
			}
		}
	}
	return false;
};