/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0; r = nums.length - 1;
  while(l <= r) {
    let m = Math.floor((l + r)/2);
    if (nums[m] === target) return m;
    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
};
