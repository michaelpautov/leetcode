/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let res = '';
  for(let i = 0; i <str.length; i++) {
    const charCode = str[i].charCodeAt(0)
    if (charCode >= 65 && charCode < 97) {
      res += String.fromCharCode(charCode + 32);
    } else {
      res += str[i]
    }
  }
  return res;
};

console.log(toLowerCase("Hello"));
console.log(toLowerCase("here"));
console.log(toLowerCase("LOVELY"));
console.log(toLowerCase("al&phaBET"));
console.log(toLowerCase("PiTAs"));
