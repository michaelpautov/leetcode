/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;

  const m = Math.floor(nums.length / 2);
  const r = { val: nums[m], left: null, right: null };
  r.left = sortedArrayToBST(nums.slice(0, m));
  r.right = sortedArrayToBST(nums.slice(m + 1))
  return r;
};
