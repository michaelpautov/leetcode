/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid == null || grid.length === 0) {
    return 0;
  }
  let uf = new UnionFind(grid);
  let nr = grid.length;
  let nc = grid[0].length;
  for(let r = 0; r < nr; r++) {
    for(let c = 0; c < nc; c++) {
      if (grid[r][c] === '1') {
        grid[r][c] = 0;
        if (r - 1 >= 0 && grid[r - 1][c] === '1') {
          uf.union(r * nc + c, (r - 1) * nc + c)
        }
        if (r + 1 < nr && grid[r + 1][c] === '1') {
          uf.union(r * nc + c, (r + 1) * nc + c)
        }
        if (c - 1 >= 0 && grid[r][c - 1] === '1') {
          uf.union(r * nc + c, r * nc + c - 1)
        }
        if (c + 1 < nc && grid[r][c + 1] === '1') {
          uf.union(r * nc + c, r * nc + c + 1)
        }
      }
    }
  }
  return uf.getCount();

};

class UnionFind {
  constructor(grid) {
    this.init(grid)
  }

  init(grid) {
    this.count = 0;
    let m = grid.length;
    let n = grid[0].length;
    let parent = new Array(m * n);
    let rank = new Array(n * m);
    for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
        if(grid[i][j] === '1') {
          parent[i * n + j] = i * n + j;
          this.count++;
        }
        rank[i * n + j] = 0;
      }
    }
    this.parent = parent;
    this.rank = rank;
  }

  find(i) {
    if (this.parent[i] !== i) this.parent[i] = this.find(this.parent[i]);
    return this.parent[i];
  }

  union(p, q) {
    let pid = this.find(p);
    let qid = this.find(q);
    if (pid !== qid) {
      if (this.rank[pid] > this.rank[qid]) {
        this.parent[qid] = pid;
      } else if (this.rank[pid] < this.rank[qid]) {
        this.parent[pid] = qid;
      } else {
        this.parent[qid] = pid;
        this.rank[pid] += 1
      }
      this.count--;
    }
  }

  getCount() {
    return this.count;
  }
}

console.log(numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]));
