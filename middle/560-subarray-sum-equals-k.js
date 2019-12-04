/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let map = new Map(), sum = 0, count = 0;
  map.set(0, 1)
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1)
    } else {
      map.set(sum, 1)
    }
  }
  return count;
};

console.log(subarraySum([-1, 3, -4, 8, -4], 2) === 2);
console.log(subarraySum([6, -4], 2) === 1);
console.log(subarraySum([1, 2, 3], 3) === 2);
//
