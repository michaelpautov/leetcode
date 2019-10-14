/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const s1 = new Set(nums1), s2 = new Set(nums2);
  return s1.size > s2.size ? intersectionSet(s2, s1) : intersectionSet(s1, s2);
};

function intersectionSet(s1, s2) {
  const res = [];
  s1.forEach(v => {
    if (s2.has(v)) {
      res.push(v);
    }
  });
  return res;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
