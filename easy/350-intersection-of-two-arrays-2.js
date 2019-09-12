/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let obj = {}, res = [];
  for(let n of nums1) {
    obj[n] = obj[n] ? obj[n]+1 : 1;
  }
  for(let n of nums2) {
    if (obj[n]) {
      res.push(n);
      obj[n]--;
    }
  }
  return res;
};


console.log(intersect([1,2,2,1], [2,2]))
console.log(intersect([4,9,5], [9,4,9,8,4]))
