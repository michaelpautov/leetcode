/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate = null;
  let count = 0;
  nums.forEach(num => {
    if (count === 0) {
      candidate = num;
    }
    count += (candidate === num) ? 1 : -1;
  });
  return candidate;
};

console.log(majorityElement([3,2,3]) === 3);
console.log(majorityElement([4,4,3,2, 2, 4,4]) === 4);
