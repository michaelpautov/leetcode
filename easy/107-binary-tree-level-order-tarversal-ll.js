/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let res = [];
  dfs(root, 0, res);
  return res.reverse();
};

function dfs(t, i, sum) {
  if (!t) return;
  if (i < sum.length)  {
    sum[i].push(t.val);
  } else {
    sum[i] = [t.val];
  }
  dfs(t.left, i + 1, sum);
  dfs(t.right, i + 1, sum);
}

var levelOrderBottom = function(root) {
  let queue = [];
  let res = [];
  queue.push(root);
  while(queue.length) {
    let temp = [];
    let count = queue.length;
    for(let i = 0; i < count; i++) {
      let n = queue.shift();
      temp.push(n.val);
      if (n.left) {
        queue.push(n.left);
      }
      if (n.right) {
        queue.push(n.right);
      }
    }
    res.unshift(temp);
  }
  return res;
};
