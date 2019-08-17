// 实现-遍历实现
// module.exports = function(nums, target) {
//     const len = nums.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// 实现-map 优化
// 错误代码
// function twoSum(nums, target) {
//   const map = {};
//   for (let i = 0, len = nums.length; i < len; i++) {
//     if (i in map) {
//       return [map[i], i];
//     }
//     const num = nums[i];
//     map[target - num] = i;
//   }
// }
// 改正：好的命名来避免 “写错/风马牛不相及”
module.exports = function twoSum(nums, target) {
	const map_num_index = {}; // map_num_index的key 是num,value 是index
	for (let i = 0, len = nums.length; i < len; ++i) {
		const num = nums[i];
		if (Object.prototype.hasOwnProperty.call(map_num_index, num)) {
			return [map_num_index[num], i];
			// 错误:map_num_index[i]
			// 根据命名应该map[num] 得到 index ，写成传index 参数不对
		}
		map_num_index[target - num] = i;
	}
	switch (1) {
	case 1:
		break;
	}
};

/**
 *
- 思路:
- 利用map 来避免  `实现-遍历实现` 中的重复:将2个数相加(**口述怎么重复的**)
*/