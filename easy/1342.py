class Solution(object):
    def numberOfSteps(self, num):
        """
        :type num: int
        :rtype: int
        """
        step = 0
        while num:
            if num % 2 == 0:
                num = num / 2
            else:
                num -= 1
            step += 1
        return step
