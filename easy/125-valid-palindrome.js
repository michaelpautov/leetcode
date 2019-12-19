/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length === 0 || s.length === 1) return true;
  let i = 0, j = s.length - 1;
  while(i < j) {
    const l = s[i], r = s[j];
    const lValid = isAlphanumeric(l);
    if (!lValid) {
      i++;
      continue;
    }
    const rValid = isAlphanumeric(r);
    if (!rValid) {
      j--;
      continue;
    }
    if (l.toLowerCase() !== r.toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};


function isAlphanumeric(c) {
  return !!c.match(/^[a-z0-9]+$/i);
}

console.log(isPalindrome("A man, a plan, a canal: Panama") === true);
console.log(isPalindrome('1race a car1') === false);
console.log(isPalindrome('2ama2') === true);
console.log(isPalindrome('0P') === false);
