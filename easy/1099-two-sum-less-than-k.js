/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function(A, K) {
  A.sort((a, b) => a-b);
  let i = 0, j = A.length - 1;
  let ans = -1;
  console.log(A);
  while(i < j) {
    let sum = A[i] + A[j];
    if (sum > K) {
      j--;
    } else {
      i++;
    }
    if (sum < K) {
      ans = sum;
    }
  }
  return ans
};

console.log(twoSumLessThanK([10, 20, 30], 15));
console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60));
