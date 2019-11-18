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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }
  const stack = [[root, sum - root.val]];
  while (stack.length) {
    const [node, count] = stack.pop();
    if (!node.left && !node.right && count === 0 ) {
      return true;
    }
    if (node.left) {
      stack.push([node.left, count - node.left.val]);
    }
    if (node.right) {
      stack.push([node.right, count - node.right.val]);
    }
  }
  return false;
};


var hasPathSum = function(root, sum) {
 if(!root) return false;
 sum -= root.val;
 if (!root.left && !root.right ) {
   return sum === 0;
 }
 return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
}
