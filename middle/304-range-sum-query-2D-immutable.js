/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (!(matrix.length && matrix[0].length)) return;
  let dp = new Array(matrix.length + 1);
  for(let i = 0; i < matrix.length + 1; i++) {
    dp[i] = new Array(matrix[0].length + 1);
    for(let j = 0; j < matrix[0].length + 1; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      dp[i+1][j+1] = dp[i+1][j] + dp[i][j+1] + matrix[i][j] - dp[i][j];
    }
  }
  this.dp = dp;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let dp = this.dp;
  return dp[row2+1][col2+1] - dp[row2+1][col1] - dp[row1][col2+1] + dp[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */


let a = new NumMatrix([
  [3,0,1,4,2],
  [5,6,3,2,1],
  [1,2,0,1,5],
  [4,1,0,1,7],
  [1,0,3,0,5]
]);

console.log(a.sumRegion(2, 1, 4, 3));
