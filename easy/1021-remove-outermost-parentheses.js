/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  const stack = [];
  let str = '';
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      if (stack.length !== 0) {
        str += '(';
      }
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length !== 0) {
        str += ')';
      }
    }
  }
  return str;
};


console.log(removeOuterParentheses("(()())(())") === "()()()");
console.log(removeOuterParentheses("(()())(())(()(()))") === "()()()()(())");
console.log(removeOuterParentheses( "()()") === "");
