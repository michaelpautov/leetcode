class Solution(object):
    def anagramMappings(self, A, B):
        """
        :type A: List[int]
        :type B: List[int]
        :rtype: List[int]
        """
        hash = {}
        for i, v in enumerate(B):
            hash[v] = i
        res = []
        for v in A:
           res.append(hash[v])
        return res

t = Solution()
print(t.anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]))
# [1, 4, 3, 2, 0]
