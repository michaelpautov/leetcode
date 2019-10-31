/**
 * @param {number[][]} logs
 * @param {number} N
 * @return {number}
 */
var earliestAcq = function(logs, N) {
  logs = logs.sort((a,b) => a[0] - b[0])
  const uf = new UnionFind(N);
  for(let i = 0; i < logs.length; i++) {
    const [t, a, b] = logs[i];
    uf.union(a,b);
    if (uf.count === 1) {
      return t;
    }
  }
  return -1;
};

class UnionFind {
  constructor(n) {
    this.count = n;
    this.ids = [];
    this.weights = [];
    this.init(n);
  }

  init(n) {
    for(let i = 0; i < n; i++) {
      this.ids[i] = i;
      this.weights[i] = 1;
    }
  }

  root(i) {
    while (i !== this.ids[i]) {
      i = this.ids[i]
    }
    return i;
  }

  union(a,b) {
    const i = this.root(a);
    const j = this.root(b);
    if (i === j) {
      return;
    }
    if (this.weights[i] < this.weights[j]) {
      this.ids[i] = j;
      this.weights[j] += this.weights[i];
    } else {
       this.ids[j] = i;
      this.weights[i] += this.weights[j];
    }
    this.count -= 1;
  }
}

console.log(earliestAcq([[20190101, 0, 1], [20190104, 3, 4], [20190107, 2, 3], [20190211, 1, 5], [20190224, 2, 4], [20190301, 0, 3], [20190312, 1, 2], [20190322, 4, 5]], 6));

console.log(earliestAcq([[3,0,3],[4,1,2],[0,2,0],[2,0,2],[8,0,3],[1,0,1],[5,1,2],[7,3,1],[6,1,0],[9,3,0]],
4))
