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

//ret 直接构造数组
var groupAnagrams = function(strs) {
  const ret = [],mapRetIndex=Object.create(null);
  for(let str of strs) {
      const hash = getHash(str);
      if(!(hash in mapRetIndex)){
          mapRetIndex[hash] = ret.length;
          ret.push([]);
      }
      ret[mapRetIndex[hash]].push(str);
  }
//   debugger;
  return ret;
};
//动态hash
const mapCharIndex=new Map();
function getHash(str){
    const hash = Array(mapCharIndex.size).fill(0);
    for(let c of str){
        if(!mapCharIndex.has(c)){
            hash[mapCharIndex.size]=0;
            mapCharIndex.set(c,mapCharIndex.size);
        }
        hash[mapCharIndex.get(c)]++;
    }
    while(hash[hash.length-1]===0){
        hash.pop();
    }
    return hash.join('_');
}