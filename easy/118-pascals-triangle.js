/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const r = [];
  for (let i = 0; i < numRows; i++) {
    r[i] = []
    for(let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        r[i][j] = 1
      } else {
        r[i][j] = r[i-1][j - 1] + r[i-1][j]
      }
    }
  }
  return r;
};



console.log(generate(5));
