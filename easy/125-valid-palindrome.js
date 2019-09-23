/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s.length) return true;
  let head = 0;
  let tail = s.length - 1;

  while (head < tail) {
    const cHead = s[head];
    const cTail = s[tail]
    if (!isLetter(cHead)) {
      head++
    } else if (!isLetter(cTail)) {
      tail--
    } else {
      if (cHead.toLowerCase() !== cTail.toLowerCase()) {
        return false
      }
      head++;
      tail--;
    }
  }
  return true;
};


function isLetter(str) {
  return str.length === 1 && str.match(/^[a-z0-9]+$/i);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
