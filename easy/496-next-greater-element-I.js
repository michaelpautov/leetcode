/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const res = nums1.map(() => -1)
  for (let i = 0; i < nums1.length; i++) {
    const num1 = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      const num2 = nums2[j];
      if (num1 === num2) {
        if (num1 < nums2[j+1]) {
          res[i] = nums2[j+1]
        } else {
          break;
        }
      }
    }
  }
  return res;
};

var nextGreaterElement = function(nums1, nums2) {
    const res = [];
    const hashmap = {};
    const stack = [];
    for(let i = 0; i < nums2.length; i++) {
      const num2 = nums2[i]
      while (stack.length !== 0 && num2 > stack[stack.length - 1]) {
        hashmap[stack.pop()] = num2
      }
      stack.push(num2)
    }

    while (stack.length !== 0) {
      hashmap[stack.pop()] = -1;
    }

    for(let i = 0; i < nums1.length; i++) {
      res[i] = hashmap[nums1[i]]
    }
    return res;
}

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
