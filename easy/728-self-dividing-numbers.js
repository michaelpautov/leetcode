/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const result = [];
  const isDividingNumber = function (num) {
    let c = num;
    while(num > 0) {
      if (c % (num % 10) !== 0) {
        return false;
      }
      num = Math.floor(num / 10);
    }
    return true;
  };

  for(; left <= right; left++) {
    if (isDividingNumber(left)) {
      result.push(left);
    }
  }
  return result;
};


console.log(selfDividingNumbers(1, 22));
