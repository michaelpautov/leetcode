/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minBuyPrice = prices[0];
  let maxProfit = 0;

  for(let i = 1; i < prices.length; i++){
    maxProfit = Math.max(maxProfit, prices[i] - minBuyPrice);
    minBuyPrice = Math.min(minBuyPrice, prices[i]);
  }

  return maxProfit;
};
