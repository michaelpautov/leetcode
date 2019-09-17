/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function(n) {
  let str = '1';
  for(let i = 1; i < n; i++) {
    let strArr = str.split('');
    str = '';
    let count = 1;
    for(let j = 0; j < strArr.length; j++) {
      if (strArr[j] !== strArr[j+1]){
        str += count + strArr[j];
        count = 1
      } else {
        count++
      }
    }
  }
  return str
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(10));
