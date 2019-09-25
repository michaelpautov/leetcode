/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let i = 0, j = -1;
  let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER
  for(let l = 0, r = nums.length-1; r >= 0; l++, r--) {
    max = Math.max(max, nums[l])
    if (max !== nums[l]) j = l
    min = Math.min(min, nums[r])
    if (min !== nums[r]) i = r
  }
  return j - i + 1
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
