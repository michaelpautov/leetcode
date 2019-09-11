/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if (b === 0) {
    return a
  }
  return getSum(a ^ b, (a & b) << 1)
};
console.log(getSum(-1, 40))
console.log(getSum(5, 40))
