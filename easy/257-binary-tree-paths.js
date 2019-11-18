/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const res = [];
  function dfs(root, path) {
    if (root) {
      path += root.val;
      if (root.left === null && root.right === null) {
        res.push(path);
      } else {
        path += '->';
        dfs(root.left, path);
        dfs(root.right, path);
      }
    }
  }
  dfs(root, '');
  return res;
};

var binaryTreePaths = function(root) {
  if (root === null)
    return [];

  const queue = [[root, []]];
  const paths = [];

  while (queue.length) {
    const [node, path] = queue.shift();

    if (node.left === null && node.right === null) {
      paths.push(path.concat([node.val]).join('->'));
      continue;
    }

    if (node.left !== null)
      queue.push([node.left, path.concat([node.val])]);

    if (node.right !== null)
      queue.push([node.right, path.concat([node.val])]);
  }

  return paths;
};


