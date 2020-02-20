class Solution(object):
    def isArmstrong(self, N):
        """
        :type N: int
        :rtype: bool
        """
        s = str(N)
        res = 0
        l = len(s)
        for n in s:
            res += int(n) ** l

        return res == N


t = Solution()
print(t.isArmstrong(153))
print(t.isArmstrong(123))
