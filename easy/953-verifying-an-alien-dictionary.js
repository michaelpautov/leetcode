/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  let hash = {};
  for(let i = 0; i < order.length;i++) {
    hash[order[i]] = i;
  }
  function isSorted(a, b) {
    let i = 0;
    for(; i < a.length; i++) {
      const l1 = hash[a[i]]
      const l2 = hash[b[i]];
      if (l1 > l2) {
        return false;
      } else if (l1 < l2) {
        return true;
      }
    }
    return i+1 < b.length;
  }
  for(let i = 1; i < words.length; i++) {
    const word1 = words[i-1], word2 = words[i];
    if (!isSorted(word1, word2)) {
      return false;
    }
  }
  return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz") === true);
console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz") === false);
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz") === false);
console.log(isAlienSorted(["kuvp", "q"], "ngxlkthsjuoqcpavbfdermiywz") === true);
console.log(isAlienSorted(["ubg", "kwh"],
    "qcipyamwvdjtesbghlorufnkzx") === true);
