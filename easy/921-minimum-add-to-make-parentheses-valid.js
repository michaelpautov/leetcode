/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let ans = 0, bal = 0;
  for (let i = 0; i < S.length; i++) {
    bal += S[i] === '(' ? 1 : -1;
    if (bal === -1) {
      ans++;
      bal++;
    }
  }
  return ans + bal;
};

console.log(minAddToMakeValid("())"));
console.log(minAddToMakeValid("((("));
console.log(minAddToMakeValid("()"));
console.log(minAddToMakeValid("()))(("));
