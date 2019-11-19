/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s === null || s.length === 0) return '';
  let start = 0, end = 0;
  for(let i = 0; i < s.length; i++) {
    let len1 = expandCenter(s, i, i);
    let len2 = expandCenter(s, i, i+1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return s.substring(start, end + 1);
};

function expandCenter(s, left, right) {
  let L = left;
  let R = right;
  while (L >= 0 && R < s.length && s[L] === s[R]){
    L--;
    R++;
  }
  return R - L - 1;
}

console.log(longestPalindrome('dababad'));
