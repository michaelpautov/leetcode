/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const expSum = nums.length * (nums.length + 1) / 2;
  const r = nums.reduce((acc, v) => acc + v, 0)
  return expSum - r;
};

console.log(missingNumber([3,0,1]) === 2);
console.log(missingNumber([9,6,4,2,3,5,7,0,1]) === 8);
