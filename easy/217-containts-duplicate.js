/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let set = {};
  for (let i = 0; i < nums.length; i++) {
    if (set[nums[i]]) {
      return true;
    } else {
      set[nums[i]] = true;
    }
  }
  return false;
};

console.log(containsDuplicate([0,1,2,3]) === false)
console.log(containsDuplicate([0,1,2,3, 0]) === true)
console.log(containsDuplicate([0,1,2,3, 4]) === false)
