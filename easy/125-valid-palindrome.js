/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(s.length === 0 || s.length === 1) {
    return true;
  }
  let i = 0, j = s.length - 1;
  while(i <= j) {
    if (!isAlphaNumeric(s[i])) {
      i++;
    } else if(!isAlphaNumeric(s[j])) {
      j--;
    } else {
      if (s[i].toLowerCase() !== s[j].toLowerCase()) {
        return false;
      }
      i++;
      j--;
    }
  }
  return true;
};

function isAlphaNumeric(char) {
  return char.match(/[a-zA-Z]|[0-9]/);
}

console.log(isPalindrome("A man, a plan, a canal: Panama") === true);
console.log(isPalindrome('1race a car1') === false);
console.log(isPalindrome('2ama2') === true);
console.log(isPalindrome('0P') === false);
