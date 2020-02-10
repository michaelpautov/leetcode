# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):

    def sumEvenGrandparent(self, root, p=1, gp=1):
        """
        :type root: TreeNode
        :rtype: int
        """
        return self.sumEvenGrandparent(root.left, root.val, p) \
               + self.sumEvenGrandparent(root.right, root.val, p) \
               + root.val * (1 - gp % 2) if root else 0

