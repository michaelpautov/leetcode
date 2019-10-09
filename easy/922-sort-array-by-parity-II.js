/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const res = [], l = A.length;
  for(let i = 0, j = 0, k = 1; i < l; i++) {
    if (A[i] % 2 === 0) {
      res[j] = A[i];
      j += 2;
    } else {
      res[k] = A[i];
      k += 2;
    }
  }
  return res;
};

// console.log(sortArrayByParityII([4, 2, 5, 7]));


var sortArrayByParityII = function (A) {
  for(let i = 0, j = 1; i < A.length; i+= 2) {
    if (A[i] % 2 === 1) {
      while (A[j] % 2 === 1) {
        j+=2;
      }
      const temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }
  }
  return A;
}

console.log(sortArrayByParityII([4, 2, 5, 7]));
