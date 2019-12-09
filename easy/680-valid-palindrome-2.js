/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, d = false) {
  if (s.length === 1 || s.length === 0) return true;
  let i = 0, j = s.length -1;
  while (i < j) {
    if(s[i] !== s[j]) {
      if (d) {
        return false;
      }
      return validPalindrome(s.substring(i + 1, j + 1), true) || validPalindrome(s.substring(i, j), true)
    } else {
      i++;
      j--;
    }
  }
  return true;
};

console.log(validPalindrome('deeee') === true);
console.log(validPalindrome('aba') === true);
console.log(validPalindrome('abc') === false);
console.log(validPalindrome('babca') === false);
console.log(validPalindrome('zwec') === false);
console.log(validPalindrome('zwec') === false);
