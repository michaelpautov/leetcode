class Solution(object):
    def subtractProductAndSum(self, n):
        """
        :type n: int
        :rtype: int
        """
        digits = str(n)
        sumDig = int(digits[0])
        productDig = int(digits[0])
        for digit in digits[1:]:
            v = int(digit)
            sumDig += v
            productDig *= v
        return productDig - sumDig

