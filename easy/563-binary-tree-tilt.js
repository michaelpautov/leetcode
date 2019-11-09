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
var findTilt = function(root) {
  var tilt = 0;
  var traverse = function (node) {
    if (!node) return 0;
    let left = traverse(node.left);
    let right = traverse(node.right);
    tilt += Math.abs(left-right);
    return left + right + node.val;
  }
  traverse(root);
  return tilt;
};


