class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        hash = {}
        n = len(s)
        j = 0
        i = 0
        ans = 0
        while j < len(s):
            char = s[j]
            if char in hash:
                i = max(hash[char], i)
            ans = max(ans, j - i + 1)
            hash[char] = j + 1
            j += 1
        return ans


test = Solution()
#
print(test.lengthOfLongestSubstring('abcabcbb') == 3)
print(test.lengthOfLongestSubstring('bbbbb') == 1)
print(test.lengthOfLongestSubstring('pwwkew') == 3)
print(test.lengthOfLongestSubstring('aab') == 2)
print(test.lengthOfLongestSubstring('dfvdfe') == 4)
