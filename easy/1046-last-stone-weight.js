/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  while(stones.length > 1) {
    stones.sort((a,b) => b-a);
    stones.push(stones.shift() - stones.shift());
  }
  return stones[0];
};

console.log(lastStoneWeight([2,7,4,1,8,1]) === 1);
