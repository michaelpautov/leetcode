class Solution(object):
    def arraysIntersection(self, arr1, arr2, arr3):
        """
        :type arr1: List[int]
        :type arr2: List[int]
        :type arr3: List[int]
        :rtype: List[int]
        """
        i = j = k = 0
        res = []

        while i < len(arr1) and j < len(arr2) and k < len(arr3):
            if arr1[i] == arr2[j] == arr3[k]:
                res.append(arr1[i])
                i, j, k = i + 1, j + 1, k + 1
                continue

            max_ = max(arr1[i], arr2[j], arr3[k])
            i = i + 1 if arr1[i] < max_ else i
            j = j + 1 if arr2[j] < max_ else j
            k = k + 1 if arr3[k] < max_ else k

        return res