/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  let ans = Number.MAX_SAFE_INTEGER;
  const min1 = root.val;
  function dfs(node) {
    if (node) {
      if (min1 < node.val && node.val < ans) {
        ans = node.val;
      } else if (node.val === min1) {
        dfs(node.left);
        dfs(node.right);
      }
    }
  }
  dfs(root);
  return ans < Number.MAX_SAFE_INTEGER ? ans : -1;
};

