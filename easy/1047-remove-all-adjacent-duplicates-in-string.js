/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    const  v = S[i];
    if (stack[stack.length - 1] === v) {
      stack.pop()
    } else {
      stack.push(v);
    }
  }
  return stack.join('');
};

console.log(removeDuplicates("abbaca"));
