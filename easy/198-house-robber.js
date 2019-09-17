/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let a = 0, b = 0;
  for(let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      a = Math.max(nums[i] + a, b)
    } else {
      b = Math.max(a, nums[i] + b)
    }
  }
  return Math.max(a,b)
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([9,0,0,9]));
