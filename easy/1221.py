class Solution(object):
    def balancedStringSplit(self, s):
        """
        :type s: str
        :rtype: int
        """
        res = cnt = 0
        for c in s:
            cnt += 1 if c == 'L' else -1
            if cnt == 0:
                res += 1
        return res

t = Solution()
print(t.balancedStringSplit('RLRRLLRLRL') == 4)

'''
1. go from start to end
    1. if length not even continue
    2. count char if one biggest then half on length also continue
    3. if it's equal increase count
return count
'''
