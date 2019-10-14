/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function(A, K) {
  A.sort((a ,b) => a - b);
  const l = A.length;
  let i = 0, j = l - 1; S = -1;
  while (i < j) {
    const sum = A[i] + A[j];
    if (sum < K) {
      S = Math.max(sum, S);
      i++;
    } else {
      j--;
    }
  }
  return S;
};

console.log(twoSumLessThanK([10, 20, 30], 15));
console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60));
