/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let l =  0;
  let r = A.length - 1;
  while(l < r) {
    const m = Math.floor((l + r) / 2);
    if (A[m] < A[m+1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
};

console.log(peakIndexInMountainArray([0,1,0]) === 1);
console.log(peakIndexInMountainArray([0,1,2,0]) === 2);
console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]) === 2);
