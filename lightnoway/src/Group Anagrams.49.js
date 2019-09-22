/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) { 
	const groups = new Map() ;
	for(const str of strs)  {
		const hash = getHash(str);
		if(!groups.has(hash)){
			groups.set(hash,[])
		}
		groups.get(hash).push(str);
	}
	const ret = []   ;
	for(let [,group] of groups){
		ret.push(group);
	}
	return ret;
};
// function getHash(str){
// 	const hash = Object.create(null);
// 	for(let c of 'abcdefghijklmnopqrstuvwxyz'){
// 		hash[c]=0;
// 	}
// 	for(let c of str){
// 		hash[c]++
// 	}
// 	return  JSON.stringify(hash);
// }
 
const aCharCode = 'a'.charCodeAt(0); 
function getHash(str){
	const hash = Array(26).fill(0); 
	for(let c of str){
		hash[c.charCodeAt(0) - aCharCode]++
	}
	return  hash.join('');
}