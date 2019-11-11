/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let sum = (1 + nums.length) * nums.length / 2;
  let realSum = 0;
  let dp;
  let map = {};
  for(let i = 0; i < nums.length; i++){
    if(map[nums[i]] === 1){
      dp = nums[i];
    }
    else{
      map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
    realSum += nums[i];
  }
  return [dp, sum + dp - realSum];
};
