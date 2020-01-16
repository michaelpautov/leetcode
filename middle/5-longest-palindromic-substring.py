class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        if s == '':
          return ''
        start = 0
        end = 0
        for i in range(len(s)):
          len1 = self.expandCenter(s, i, i)
          len2 = self.expandCenter(s, i, i+1)
          lenMax = max(len1, len2)
          if lenMax > end - start:
            start = i - (lenMax - 1) / 2
            end = i + lenMax / 2
        return s[start:end + 1]

    def expandCenter(self, s, start, end):
      L = start
      R = end
      while L >= 0 and R < len(s) and s[L] == s[R]:
        L -= 1
        R += 1
      return R - L - 1

