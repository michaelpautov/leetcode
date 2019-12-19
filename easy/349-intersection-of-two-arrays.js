/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if (nums1.length < nums2.length) return intersection(nums2, nums1);
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let ans = [];
  for( let val of set2.values()) {
    if (set1.has(val)) {
      ans.push(val);
    }
  }
  return ans;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
