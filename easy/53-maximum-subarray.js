/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let [far, end] = [nums[0], nums[0]];
  for(let i =1; i < nums.length;++i) {
    end = Math.max(end + nums[i], nums[i]);
    far = Math.max(far, end)
  }
  return far;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
