/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sum = new Array(nums.length + 1);
  for (let i = 0; i < nums.length; i++) {
    this.sum[i+1] = this.sum[i] == undefined ? nums[i] : this.sum[i]  + nums[i]
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sum[i] !== undefined ? this.sum[j + 1] - this.sum[i] : this.sum[j+1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

let a = new NumArray([-2, 0, 3, -5, 2, -1])

console.log(a.sumRange(0, 5));
console.log(a.sumRange(2, 5));
console.log(a.sumRange(0, 2));
