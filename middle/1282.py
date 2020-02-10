class Solution(object):
    def groupThePeople(self, groupSizes):
        """
        :type groupSizes: List[int]
        :rtype: List[List[int]]
        """
        hash_map = {}
        for i, v in enumerate(groupSizes):
            if v in hash_map:
                hash_map[v].append(i)
            else:
                hash_map[v] = [i]
        res = []
        for i, v in hash_map.items():
            l = len(v)
            j = 0
            while j * i < l:
                res.append(v[l - ((j + 1) * i):l - (j * i)])
                j += 1
        return res


t = Solution()
print(t.groupThePeople([3,3,3,3,3,1,3]))