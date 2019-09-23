/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return needle.length ? haystack.indexOf(needle) : 0;
};
