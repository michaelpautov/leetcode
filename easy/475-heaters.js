/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  houses.sort((a,b) => a - b);
  heaters.sort((a,b) => a - b);
  let res = 0;
  for(let i = 0; i < houses.length; i++) {
    const house = houses[i];
    let j = 0;
    while (j < heaters.length - 1 && heaters[j] + heaters[j+1] <= house*2) {
      j++;
    }
    res = Math.max(res, Math.abs(heaters[j] - house))
  }
  return res;
};

console.log(findRadius([1, 2, 3], [2]));
console.log(findRadius([1, 2, 3, 4], [4,1, 4]));
