/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  if (S.length < T.length) return backspaceCompare(T, S);
  let s = [], t = [];
  for(let i = 0; i < S.length; i++) {
    const sV = S[i], tV = T[i];
    add(s, sV);
    add(t, tV);
  }
  if (s.length !== t.length) return false;
  for(let i = 0; i < s.length;i++) {
    if (s[i] !== t[i]) {
      return false;
    }
  }
  return true;
};

function add(stack, el) {
  if (el !== undefined) {
    if (el === '#') {
      stack.pop();
    } else {
      stack.push(el);
    }
  }
}
