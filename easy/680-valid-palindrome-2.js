/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  if (s.length === 0 || s.length === 1) {
    return true;
  }

  for(let i = 0; i < s.length / 2 - 1; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      let j = s.length - 1 - i;
      return (isPalindrome(s, i+1, j) || isPalindrome(s, i, j-1));
    }
  }
  return true;
};

function isPalindrome(s, i, j) {
  for(let k = i; k <= i + (j - i) / 2; k++) {
    if (s[k] !== s[j - k + i]) {
      return false;
    }
  }
  return true;
}

console.log(validPalindrome('abca'));
console.log(validPalindrome('aba'));
console.log(validPalindrome('babca'));
console.log(validPalindrome('zwec'));
