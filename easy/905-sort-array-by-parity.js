/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let i = 0; j = A.length - 1;
  while(i < j) {
    if (A[i] % 2 > A[j] % 2) {
      const temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }
    if (A[i] % 2 === 0) i++;
    if (A[j] % 2 === 1) j--;
  }
  return A;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
