/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var arr = [1,2,3];
  for (let i = 3; i <n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1]
  }
  return arr[n - 1]
};

console.log(climbStairs(2));
console.log(climbStairs(5));
