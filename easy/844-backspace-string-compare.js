/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  return parseString(S) === parseString(T);
};

function parseString(s) {
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '#') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join('');
}
