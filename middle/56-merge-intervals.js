/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a,b) => a[0] - b[0])
  let ans = [];
  ans[0] = intervals[0];
  for(let i = 1;i < intervals.length; i++) {
    const [x1, x2] = ans[ans.length-1];
    const [y1, y2] = intervals[i];
    if (x2 < y1) {
      ans.push([y1, y2]);
    } else {
      ans[ans.length-1][1] = Math.max(x2, y2);
    }
  }
  return ans;
};

console.log(isArrayEqual(merge([[1, 4], [4, 5]]), [[1,5]]));
console.log(isArrayEqual(merge([[1,4],[2,3]]), [[1,4]]));
console.log(isArrayEqual(merge([[1,4],[0,2],[3,5]]), [[0,5]]));
console.log(isArrayEqual(merge([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1,6],[8,10],[15,18]]));

function isArrayEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
