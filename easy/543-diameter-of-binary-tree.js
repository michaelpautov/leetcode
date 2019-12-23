/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let ans = 1;
  depth(root);

  function depth(node) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;
    let L = depth(node.left);
    let R = depth(node.right);
    let sum = L + R + 1;
    if (ans < sum) {
      ans = sum;
    }
    return Math.max(L, R) + 1;
  }
  return ans - 1;
};


var node = {
  val: 4,
  left: {
    val: 5,
    left: null,
    right: null,
  },
  right: {
    val: 6,
    left: {
      val: 5,
      right: null,
      left: {
        val: 5,
        right: null,
        left: {
          val: 7,
          left: {
            val: 7,
            left: null,
            right: null,
          },
          right: null,
        }
      }
    },
    right: {
      val: 6,
      left: {
        val: 5,
        right: null,
        left: {
          val: 5,
          right: null,
          left: {
            val: 7,
            left: null,
            right: null,
          }
        }
      },
    },
  }
}
    // [1,2, 3, null, null, 5, 6, 7, null, null, 9, 7, null, null, 10 ]

console.log(diameterOfBinaryTree(node));
console.log(diameterOfBinaryTree(node) === 8);
