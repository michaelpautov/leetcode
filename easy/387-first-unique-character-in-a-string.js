/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const uniqChars = {};
  for(let i = 0; i < s.length; i++) {
    if (typeof uniqChars[s[i]] === 'number') {
      uniqChars[s[i]] += 1
    } else {
      uniqChars[s[i]] = 0
    }
  }
  for(let i = 0; i < s.length; i++) {
    if (uniqChars[s[i]] === 0) {
      return i;
    }
  }
  return -1
};

console.log(firstUniqChar("leetcode") === 0)
console.log(firstUniqChar("leetcodle") === 3)
