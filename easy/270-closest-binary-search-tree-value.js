/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  let min = root.val;
  function dfs(root) {
    if (!root) return;
    if (Math.abs(min - target) >= Math.abs(root.val - target)) {
      min = root.val
    }
    if (target < root.val) {
      dfs(root.left);
    } else {
      dfs(root.right);
    }
  }
  dfs(root);
  return min;
};
