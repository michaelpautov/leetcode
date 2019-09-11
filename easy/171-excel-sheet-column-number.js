/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const charCodeBase = 'A'.charCodeAt(0) - 1;
  const n = s.length;
  let number = 0;
  for (let i = 0; i < n; i++)
    number += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, n-i-1);

  return number;
};

console.log(titleToNumber("A") === 1)
console.log(titleToNumber("AB") === 28)
console.log(titleToNumber("ZY") === 701)
