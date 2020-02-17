class Solution(object):
    def calculateTime(self, keyboard, word):
        """
        :type keyboard: str
        :type word: str
        :rtype: int
        """
        keyboard_hash = {}
        for i, c in enumerate(keyboard):
            keyboard_hash[c] = i
        pos = keyboard[0]
        count = 0
        for c in word:
            current = keyboard_hash[pos]
            future = keyboard_hash[c]
            count += abs(future - current)
            pos = c
        return count

t = Solution()

print(t.calculateTime("abcdefghijklmnopqrstuvwxyz", "cba") == 4)
print(t.calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode") == 73)
