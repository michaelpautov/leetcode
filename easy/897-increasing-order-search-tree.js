  // function TreeNode(val) {
  //     this.val = val;
  //     this.left = this.right = null;
  // }
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let ans = new TreeNode(0);
  let curr = ans;
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    curr.left = null;
    curr.right = node;
    curr = node;
    dfs(node.right);
  }
  dfs(root);
  return ans.right;
};
