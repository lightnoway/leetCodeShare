//https://leetcode-cn.com/problems/minimum-window-substring/submissions/
var minWindow = function(s, t) {
	const hashT=new Map();
	for(let char of t){
		if(!hashT.has(char)){
			hashT.set(char,1);
		} else{
			hashT.set(char,hashT.get(char)+1);
		}
	}
	let left=0,
		right=0,
		matchCount = 0,match = '';
	while(right < s.length){
		const rChar = s[right++];
		if(hashT.has(rChar)){
			if(hashT.get(rChar)>0) matchCount++;
			hashT.set(rChar,hashT.get(rChar)-1); 
		}
        
		while(matchCount === t.length){
			const curMatch = s.substring(left,right);
			if(match.length === 0){
				match = curMatch;
			}else if(curMatch.length < match.length){
				match = curMatch;
			}
			const lChar = s[left++];
			if(hashT.has(lChar)){
				hashT.set(lChar,hashT.get(lChar)+1);
				if(hashT.get(lChar)>0){
					matchCount--;
				}
			}
		}
	}
	return match;
};