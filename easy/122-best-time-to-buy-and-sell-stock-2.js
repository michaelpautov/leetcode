/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let r = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      r+= prices[i] - prices[i-1];
    }
  }
  return r;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 7);
console.log(maxProfit([1,2,3,4,5]) === 4);
console.log(maxProfit( [7,6,4,3,1]) === 0);

