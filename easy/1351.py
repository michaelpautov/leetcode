class Solution(object):
    def countNegatives(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        return sum(a < 0 for r in grid for a in r)

t = Solution()
print(t.countNegatives([[4, 3, 2, 0], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]))
