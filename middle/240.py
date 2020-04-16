class Solution(object):
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        N = len(matrix)
        if N == 0 or len(matrix[0]) == 0:
            return False

        N2 = len(matrix[0])
        row = N - 1
        col = 0

        while col < N2 and row >= 0:
            if matrix[row][col] > target:
                row -= 1
            elif matrix[row][col] < target:
                col += 1
            else:
                return True
        return False





t = Solution()
print(t.searchMatrix(
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
],
    20
))

print(t.searchMatrix(
[
  [-5]
],
   -5
))