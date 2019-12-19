/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const hash = {};
  for(let i = 1; i < order.length; i++) {
    hash[order[i]] = i;
  }
  function isSorted(a, b) {
    for(let i = 0; i < a.length; i++) {
      const aV = hash[a[i]], bV = hash[b[i]];
      if (!aV || !bV) break;
      if (aV > bV) {
        return false;
      } else if (aV < bV) {
        return true;
      }
    }
    return a.length < b.length;
  }
  for(let i = 1; i < words.length; i++) {
    const w1 = words[i-1], w2 = words[i];
    if (!isSorted(w1, w2)) {
      return false
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
