/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];
  let r = '';
  for(let i = 0; i < strs[0].length; i++) {
    let char;
    for(let j = 0; j < strs.length; j++) {
      if (j === 0) {
        char = strs[j][i];
        continue;
      } else {
        if (char !== strs[j][i]) {
            return r;
        }
      }
    }
    r += char;
  }
  return r;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flo", "flow", "flowht"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([]));
