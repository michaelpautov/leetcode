class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        N = len(nums)
        if N == 0:
            return 0
        prev = None
        for v in range(nums):
            if prev == None:
                prev = v

t = Solution()
# print(t.findMaxConsecutiveOnes([1,1,0,1,1,1]))
print(t.findMaxConsecutiveOnes( [1,0,1,1,0,1]))