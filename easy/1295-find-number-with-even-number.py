class Solution(object):
    def findNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        c = 0
        for n in nums:
            if len(str(n)) % 2 == 0:
                c += 1
        return c


t = Solution()
t.findNumbers([12,345,2,6,7896])