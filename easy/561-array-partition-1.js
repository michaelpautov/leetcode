/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort();
  let res = 0;
  for (let i = 0; i < nums.length; i += 2) {
    res += nums[i]
  }
  return res;
};

console.log(arrayPairSum([1, 4, 3, 2]));
