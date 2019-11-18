/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
  const graph = new Map();
  for(let i = 0; i < N; i++) {
    graph.set(i, new Set());
  }
  for(let i = 0; i < paths.length; i++) {
    const x = paths[i][0] - 1;
    const y = paths[i][1] - 1;
    graph.get(x).add(y);
    graph.get(y).add(x);
  }

  const res = new Array(N);
  for(let i = 0; i < N; i++) {
    const colors = new Array(5);
    const garden = graph.get(i);
    if (garden) {
      for(let gardenValue of garden.values()) {
        const resVal = res[gardenValue];
        if (resVal) {
          colors[resVal] = 1;
        }
      }
    }
    for(let c = 4; c >= 1; c--) {
      if (colors[c] !== 1) {
        res[i] = c;
      }
    }
  }
  return res;

};

console.log(gardenNoAdj(3, [[1, 2], [2, 3], [3, 1]]));
console.log(gardenNoAdj(4, [[1,2],[3,4]]));
console.log(gardenNoAdj(4, [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]));
