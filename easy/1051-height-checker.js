/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const count = new Int8Array(101);
  for(let i = 0; i < heights.length; i++) {
    count[heights[i]] += 1;
  }
  let index = 0;
  let res = 0;
  for(let i = 1; i < 101; i++) {
    while(count[i]) {
      if (heights[index] !== i) {
        res++;
      }
      index++;
      count[i]--;
    }
  }
  return res
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
