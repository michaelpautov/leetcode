/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let L = 0; R = nums.length - 1;
  while (L <= R) {
    const m = Math.floor((L + R) / 2);
    const v = nums[m];
    if (v === target) return m;
    if (v > target) {
      R = m-1;
    } else if (v < target) {
      L = m+1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([5], 5));
