/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let y = Math.abs(x);
  if(y.toString(2).length > 31) return 0;
  let arr = y.toString().split("").reverse();
  if(Number(arr.join("")).toString(2).length > 31) return 0;
  let z = Number(arr.join(""));
  return x >= 0 ? z : -z;
};
