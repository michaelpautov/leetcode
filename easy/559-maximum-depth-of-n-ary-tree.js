/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root, level = 1, max = 0) {
  if (root && root.children.length === 0) {
    return Math.max(level, max);
  }
  if (root) {
    for (let i = 0; i < root.children.length; i++) {
      max = Math.max(max, maxDepth(root.children[i], level + 1, max));
    }
  }
  return max;
};


var maxDepth = function(root) {
  let max = 0;
  let stack = [[root, 1]];
  while (stack.length) {
    let [node, level] = stack.pop();
    if (node && node.children.length === 0) {
      max = Math.max(level, max);
      continue;
    }
    if (node) {
      for (let i = 0; i < node.children.length; i++) {
        stack.push([node.children[i], level + 1]);
      }
    }
  }
  return max;
}
