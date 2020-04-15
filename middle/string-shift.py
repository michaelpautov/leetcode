class Solution(object):
    def stringShift(self, s, shift):
        """
        :type s: str
        :type shift: List[List[int]]
        :rtype: str
        """
        N = len(s)
        for d, a in shift:
            if d == 1:
                s = s[N - a:] + s[:N-a]
            else:
                s = s[a:] + s[:a]
        return s

t = Solution()

print(t.stringShift("abcdefg", [[1,1],[1,1],[0,2],[1,3]]))