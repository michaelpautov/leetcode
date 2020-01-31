class Solution(object):
    def maximumProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        min1, min2 = sys.maxint, sys.maxint
        minInt = -sys.maxint - 1
        max1, max2, max3 = minInt, minInt, minInt
        for n in nums:
          if n <= min1:
            min2 = min1
            min1 = n
          elif n <= min2:
            min2 = n
          if n >= max1:
            max3 = max2
            max2 = max1
            max1 = n
          elif n >= max2:
            max3 = max2
            max2 = n
          elif n >= max3:
            max3 = n
        return max(min1 * min2 * max1, max1 * max2 * max3)