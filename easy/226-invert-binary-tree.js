/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null
  let temp = root.left;
  root.left = root.right ? invertTree(root.right) : null;
  root.right = temp ? invertTree(temp) : null;
  return root;
};

var node = {
  val: 4,
  left: {
    val: 5,
    left: null,
    right: null,
  },
  right: {
    val: 6,
    left: null,
    right: null,
  }
}

console.log(invertTree(node));
