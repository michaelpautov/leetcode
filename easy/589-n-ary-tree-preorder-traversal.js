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
var preorder = function(root) {
  var result = [];
  var traverse = function (tree) {
    if (!tree) {
      return result;
    }
    result.push(tree.val);
    for (let i = 0; i < tree.children.length; i++) {
      traverse(tree.children[i]);
    }
    return result;
  }
  return traverse(root);
};

var preorder = function (root) {
  const stack = [], result = [];
  if (!root) return result;
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    for(let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  return result;
}
