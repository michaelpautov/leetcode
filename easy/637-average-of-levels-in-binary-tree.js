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
var averageOfLevels = function(root) {
  let res = [], count = [];
  average(root, 0, res, count);
  for(let i = 0; i < res.length; i++) {
    res[i] = res[i] / count[i];
  }
  return res;
};

function average(t, i, sum, count) {
  if (!t)  return;
  if (i < sum.length) {
    sum[i] += t.val;
    count[i] += 1;
  } else {
    sum.push(t.val);
    count.push(1);
  }
  average(t.left, i + 1, sum, count);
  average(t.right, i + 1, sum, count);
}

var averageOfLevels = function(root) {
  let res = [], list = [];
  list.push(root);
  while(list.length) {
    let sum = 0, count = 0;
    let temp = [];
    while (list.length) {
      let n = list.pop();
      sum += n.val;
      count++;
      if (n.left) {
        temp.push(n.left);
      }
      if (n.right) {
        temp.push(n.right);
      }
    }
    list = temp;
    res.push(sum / count);
  }
  return res;
};
