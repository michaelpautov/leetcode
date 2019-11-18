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
var minDepth = function(root) {
  if (!root) return 0;
  let stack = [[root, 1]];
  let min = Infinity;
  while (stack.length) {
    const [node, depth] = stack.pop();
    if (!node.left && !node.right) {
      min = Math.min(min, depth);
    }
    if (node.left) {
      stack.push([node.left, depth + 1]);
    }
    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
  }
  return min;
};
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  let min = Infinity;
  if (root.left) {
    min = Math.min(minDepth(root.left), min)
  }
  if (root.right) {
    min = Math.min(minDepth(root.right), min)
  }
  return min + 1;
};
