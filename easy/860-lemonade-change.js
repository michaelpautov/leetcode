/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0, ten = 0;
  for (let i = 0; i < bills.length; i++) {
    const v = bills[i];
    if (v === 5) five++;
    else if (v === 10) {
      five--;
      ten++;
    } else if (ten > 0) {
      ten--;
      five--;
    } else {
      five -= 3;
    }
    if (five < 0) return false;
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20]));
