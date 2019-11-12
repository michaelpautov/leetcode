/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};

// let a = new TreeNode(1);
// a.left = new TreeNode(2);
// a.right = new TreeNode(3);;
//
// let b = new TreeNode(1);
// b.left = new TreeNode(2);
// b.right = new TreeNode(3);
//
// let c = new TreeNode(1);
// c.left = new TreeNode(2);
//
// let d = new TreeNode(1);
// d.right = new TreeNode(2);
//
// console.log(isSameTree(a,b));
// console.log(isSameTree(c, d));
