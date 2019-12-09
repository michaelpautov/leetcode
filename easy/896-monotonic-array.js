/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let inc = true, dec = true;
  for(let i = 1; i < A.length; i++) {
    if (!inc && !dec) return false;
    if (A[i - 1] > A[i]) {
      inc = false;
    }
    if (A[i - 1] < A[i]) {
      dec = false;
    }
  }
  return inc || dec;
};

/*


 */

console.log(isMonotonic([1, 1, 2, 3] ) === true);
console.log(isMonotonic([4, 4, 3, 2] ) === true);
console.log(isMonotonic([6,5,4,4] ) === true);
console.log(isMonotonic([1,3,2]) === false);
console.log(isMonotonic([1,2,4,5] ) === true);
console.log(isMonotonic([1,1,1] ) === true);
console.log(isMonotonic([5,6,5]) === false);
console.log(isMonotonic([-1,-5,-8] ) === true);
console.log(isMonotonic([-8,-3,0, 10] ) === true);
console.log(isMonotonic([-8] ) === true);
