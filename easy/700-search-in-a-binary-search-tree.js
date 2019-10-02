  // function TreeNode(val) {
  //     this.val = val;
  //     this.left = this.right = null;
  // }
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root === null) { return root }
  if (root.val === val) {
    return root;
  } else {
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
  }
};
