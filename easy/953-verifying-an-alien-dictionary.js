/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  let indexes = {};
  for (let i = 0; i < order.length; i++) {
    indexes[order[i]] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i+1];

    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        if (indexes[word1[j]] > indexes[word2[j]]) {
          return false;
        }
        break;
      } else {
        if (word1.length > word2.length) {
          return false;
        }
      }
    }

  }
  return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));;
console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"));
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
console.log(isAlienSorted(["kuvp", "q"], "ngxlkthsjuoqcpavbfdermiywz"));
