class Solution(object):
    def increasingTriplet(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        first = second = float('inf')
        for n in nums:
            if n <= first:
                first = n
            elif n <= second:
                second = n
            else:
                return True
        return False

t = Solution()
print(t.increasingTriplet([1,2]) == False)
print(t.increasingTriplet([5,1,5,5,2,5,4]) == True)
print(t.increasingTriplet([]) == False)
print(t.increasingTriplet([1,2,3]) == True)
print(t.increasingTriplet([1,2,3,4,5]) == True)
print(t.increasingTriplet([5,4,3,2,1]) == False)
