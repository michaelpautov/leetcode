/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;
  const node = {};
  if (t1 && !t2) {
    node.val = t1.val;
    node.left = mergeTrees(t1.left, null);
    node.right = mergeTrees(t1.right, null);
    return node;
  }
  if (t2 && !t1) {
    node.val = t2.val;
    node.left = mergeTrees(null, t2.left );
    node.right = mergeTrees(null,t2.right );
    return node;
  }
  node.val = t1.val + t2.val;
  node.left = mergeTrees(t1.left, t2.left);
  node.right = mergeTrees(t1.right, t2.right);
  return node;
};

const fTree = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5,
    }
  },
  right: {
    val: 2,
  }
}

const sTree = {
  val: 2,
  left: {
    val: 1,
    right: {
      val: 4,
    }
  },
  right: {
    val: 3,
    right: {
      val: 7,
    }
  }
}

console.log(mergeTrees(fTree, sTree));
