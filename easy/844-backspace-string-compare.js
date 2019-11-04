/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  return parse(S) === parse(T);
};

var parse = function (str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const v = str[i];
    if (v === '#') {
      stack.pop();
    } else {
      stack.push(v);
    }
  }
  return stack.join('')
}


console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('ad##', 'a#d#'));
console.log(backspaceCompare('a#c', 'b'));
