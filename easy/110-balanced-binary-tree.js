/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  function isBalancedHelper(root) {
    if (root === null) {
      return [true, -1];
    }
    let [leftIsBalanced, leftHeight] = isBalancedHelper(root.left);
    if (!leftIsBalanced) {
      return [false, 0]
    }
    let [rightIsBalanced, rightHeight] = isBalancedHelper(root.right);
    if (!rightIsBalanced) {
      return [false, 0]
    }
    return [(Math.abs(leftHeight - rightHeight) < 2), 1 + Math.max(leftHeight, rightHeight)];
  }
  return isBalancedHelper(root)[0];
};

