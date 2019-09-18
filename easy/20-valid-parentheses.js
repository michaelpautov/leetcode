/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 1) {
    return false
  }
  const stack = [];
  for(let i = 0; i < s.length; i++) {
    const v = s[i];
    if (v === '[' || v === '(' || v === '{') {
      stack.push(v)
    } else {
      if (stack.pop() !== altBrack(v)) {
        return false
      }
    }
  }
  if (stack.length) {
    return false
  }
  return true;
};


var altBrack = function(bracket) {
  switch (bracket) {
    case ')':
      return '('
    case '}':
      return '{'
    default:
      return '['
  }
}


// console.log(isValid('()[]{}'));
// console.log(isValid('([)]'));
console.log(isValid('(['));
console.log(isValid(')]'));
