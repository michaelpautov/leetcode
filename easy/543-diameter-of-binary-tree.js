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
var ans = 0;

var diameterOfBinaryTree = function(root) {
  ans = 1;
  depth(root);
  return ans -1;
};
var depth = function (node) {
  if (node === null) return 0;
  let l = depth(node.left);
  let r = depth(node.right);
  ans = Math.max(ans, l+r+1);
  return Math.max(l, r) + 1;
}

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
    right: {
      val:5 ,
      left: null,
      right: null,
    },
  }
}

console.log(diameterOfBinaryTree(node));
