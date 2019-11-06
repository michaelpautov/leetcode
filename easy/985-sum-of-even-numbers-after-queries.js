/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  let S =  A.reduce((acc, v) => v % 2 === 0 ? acc + v : acc, 0);
  const ans = [];
  for (let i = 0; i < queries.length; i++) {
    const [v, ind] = queries[i];
    if (A[ind] % 2 === 0) S -= A[ind];
    A[ind] += v;
    if (A[ind] % 2 === 0) S += A[ind];
    ans.push(S)
  }
  return ans;
};

console.log(sumEvenAfterQueries([1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]]));
