/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  var result = [];
  backtracking(S, 0, '', result);
  return result;
};

var backtracking = function (S, i, solution, result) {
  if (S.length === i) {
    result.push(solution);
    return;
  }

  backtracking(S, i + 1, solution + S[i].toLowerCase(), result);
  if (!isNumeric(S[i])) {
    backtracking(S, i + 1, solution +  S[i].toUpperCase(), result);
  }
};

function isNumeric(s) {
  return !isNaN(s - parseFloat(s));
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

console.log(arraysEqual(letterCasePermutation('a1b2'),["a1b2", "a1B2", "A1b2", "A1B2"]));
console.log(arraysEqual(letterCasePermutation('3z4'),["3z4", "3Z4"]));
