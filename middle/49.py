class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        strs_hash = {}
        res = []
        for s in strs:
            key = ''.join(sorted(s))
            if key in strs_hash:
                res[strs_hash[key]].append(s)
            else:
                res.append([s])
                strs_hash[key] = len(res) - 1

        return res


t = Solution()
t.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
