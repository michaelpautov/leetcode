/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  let trusted = new Array(N + 1).fill(0);
  for(let [i, j] of trust) {
    trusted[i] -= 1
    trusted[j] += 1
  }
  for(let i = 1; i < trusted.length; i++) {
    if (trusted[i] === N - 1) return i;
  }
  return -1;
};

console.log(findJudge(1, []));
console.log(findJudge(3, [[1, 3], [2, 3]]));
