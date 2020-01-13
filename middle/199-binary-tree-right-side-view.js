/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let hash = new Map;
  let stack = [[root, 0]];
  let maxDepth = -1;
  while (stack.length) {
    let [node, depth] = stack.shift();
    if (node) {
      maxDepth = Math.max(maxDepth, depth);
      hash.set(depth, node.val);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }
  let result = [];
  for(let i = 0; i <= maxDepth; i++) {
    result.push(hash.get(i))
  }
  return result;
};

