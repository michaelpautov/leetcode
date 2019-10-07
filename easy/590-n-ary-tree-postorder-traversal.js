/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  const stack = [], result = [];
  if (!root) return [];
  stack.push(root);
  while (stack.length) {
    const node = stack.shift();
    result.unshift(node.val);
    for (let i = 0; i < node.children.length; i++) {
      stack.unshift(node.children[i]);
    }
  }
  return result;
};

var postorder = function (root) {
  const result = [];
  function traverse(node) {
    if (!node) {
      return result;
    }
    result.unshift(node.val)
    for (let i = node.children.length; i >= 0; i--) {
      traverse(node.children[i]);
    }
    return result;
  }
  return traverse(root);
}
