/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const l = nums.length;
  let L = new Array(l);
  let R = new Array(l);
  L[0] = 1;
  for(let i = 1; i < l; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  }
  R[l - 1] = 1;
  for(let i = l - 2; i >= 0; i--) {
    R[i] = R[i + 1] * nums[i + 1];
  }
  let ans = [];
  for(let i = 0; i < l; i++) {
    ans[i] = L[i] * R[i];
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let l = nums.length;
  let ans = [];
  ans[0] = 1;
  for(let i = 1; i < l; i++) {
    ans[i] = nums[i-1] * ans[i - 1];
  }
  let R = 1;
  for(let i = l - 1; i >= 0; i--) {
    ans[i] = ans[i] * R;
    R *= nums[i];
  }
  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]));
