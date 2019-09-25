/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (root === null) return 0;
  return calcSum(root, sum) + calcSum(root.left, sum) + calcSum(root.right, sum)
};

var calcSum = function (node, sum) {
  if (node === null) return 0;
  return (node.val === sum ? 1 : 0) + calcSum(node.left, sum - node.val) + calcSum(node.right, sum - node.val)
}
