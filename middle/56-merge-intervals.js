/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let ans = [];
  for(let i = 0; i < intervals.length; i++) {
    const [n1, n2] = intervals[i];
    if (ans.length === 0 || ans[ans.length-1][1] < n1) {
      ans.push([n1, n2])
    } else {
      ans[ans.length-1][1] = Math.max(n2, ans[ans.length-1][1]);
    }
  }
  return ans;
};
//
console.log(isArrayEqual(merge([[1, 4], [4, 5]]), [[1,5]]));
console.log(isArrayEqual(merge([[1,4],[2,3]]), [[1,4]]));
console.log(isArrayEqual(merge([[1,4],[0,2],[3,5]]), [[0,5]]));
console.log(isArrayEqual(merge([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1,6],[8,10],[15,18]]));

function isArrayEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
