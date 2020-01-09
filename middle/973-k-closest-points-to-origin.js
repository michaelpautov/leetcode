/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  let dists = points.map(dist);
  dists.sort((a,b) => a - b);
  let ans = [];
  let distK = dists[K - 1];
  for(let i = 0; i < points.length; i++) {
    if (dist(points[i]) <= distK) {
      ans.push(points[i])
    }
  }
  return ans;
};

function dist(point) {
  const [a,b] = point;
  return (a * a) + (b * b);
}


console.log(isArrayEqual(kClosest([[1, 3], [-2, 2]], 1), [[-2,2]]));
console.log(isArrayEqual(kClosest([[3, 3], [5, -1], [-2, 4]], 2),[[3,3],[-2,4]]));


function isArrayEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
