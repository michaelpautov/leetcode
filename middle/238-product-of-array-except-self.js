
var productExceptSelf = function(nums) {
  const l = nums.length;
  const ans = []
  ans[0] = 1
  for(let i = 1; i < l; i++) {
    ans[i] = nums[i-1] * ans[i-1]
  }
  let R = 1
  for(let i = l - 1; i >= 0; i--) {
    ans[i] = ans[i] * R
    R *= nums[i]
  }
  return ans
};

console.log(productExceptSelf([1, 2, 3, 4]));
