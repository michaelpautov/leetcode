/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let res = [];
  dfs(root, 0, res);
  return res.reverse();
};

function dfs(t, i, sum) {
  if (!t) return;
  if (i < sum.length)  {
    sum[i].push(t.val);
  } else {
    sum[i] = [t.val];
  }
  dfs(t.left, i + 1, sum);
  dfs(t.right, i + 1, sum);
}

