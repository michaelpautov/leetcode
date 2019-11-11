/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let l = 0; h = numbers.length;
  while (l < h) {
    const sum = numbers[l] + numbers[h];
    if (sum === target) return [l + 1, h + 1];
    if (sum > target) {
      h--;
    } else {
      l++;
    }
  }
  return [-1, -1];
};

console.log(twoSum([2, 7, 11, 15], 9));
