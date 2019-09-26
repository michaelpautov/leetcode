/**
 * @param {number[]} A
 * @return {number}
 */

// hash solution T: O(N), S: O(N)
var repeatedNTimes = function(A) {
  const hash = {};
  for(let i = 0; i < A.length; i++) {
    const v = A[i]
    if (hash[v]) {
      return v;
    } else {
      hash[v] = true
    }
  }
  return -1
};

// compare soultion T: O(N), S: O(1)
var repeatedNTimes = function(A) {
  for(let k = 1; k <= 3; k++) {
    for(let i = 0; i < A.length - k; i++){
      if (A[i] === A[i+k]) {
        return A[i]
      }
    }
  }
  throw null;
};
