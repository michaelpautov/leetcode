/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let parent = [];
  let depth = [];
  function dfs(node, par = null) {
    if (node) {
      const val = node.val;
      if (par && depth[par.val] !== undefined) {
        depth[val] = depth[par.val] + 1;
      } else {
        depth[val] = 0;
      }
      parent[val] = par;
      dfs(node.left, node);
      dfs(node.right, node);
    }
  }
  dfs(root);
  return parent[x] !== parent[y] && depth[x] === depth[y]
};

var isCousins = function (root, x, y) {
  if (!root) return false;
  const stack = [root];
  while (stack.length) {
    let l = stack.length;
    let isXExist = false, isYExist = false;
    for(let i = 0; i < l;i++) {
      const node = stack.shift();
      if (node.val === x) isXExist = true;
      if (node.val === y) isYExist = true;
      if (node.left && node.right) {
        if (node.left.val === x && node.right.val === y) {
          return false;
        }
        if (node.left.val === y && node.right.val === x) {
          return false;
        }
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    if (isXExist && isYExist) return true;
  }
  return false;
}
