/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var numWays = function(n, k) {
  if (n === 0) return 0;
  if (n === 1) return k;
  let sameColorCount = k;
  let diffColorCount = k*(k - 1);
  for(let i = 2; i < n; i++) {
    let temp = diffColorCount;
    diffColorCount = (diffColorCount + sameColorCount) * (k-1);
    sameColorCount = temp;
  }
  return diffColorCount + sameColorCount;
};
