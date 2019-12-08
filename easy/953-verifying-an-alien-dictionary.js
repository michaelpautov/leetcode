/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  if (words.length === 1) return true;
  const hash = {};
  for(let i = 0; i < order.length; i++) {
    hash[order[i]] = order.length - i;
  }
  function isSorted(word1, word2) {
    for(let i = 0; i < word1.length;i++) {
      const char1 = word1[i];
      const char2 = word2[i];
      if (char1 === undefined || char2 === undefined) break;
      if (char1 === char2) continue;
      const alien1 = hash[char1];
      const alien2 = hash[char2];
      if (alien1 > alien2) return true;
      if (alien1 < alien2) return false;
    }
    return word1.length <= word2.length;
  }
  for(let i = 1; i < words.length; i++) {
    if(!isSorted(words[i-1], words[i])) {
      return false;
    }
  }
  return true;
};
/*
  1. we should add character value to hash by alien alphabetically. Then we should use that hash for compare
  2. we should create function which will check is word1 are smaller then word2
    ** function implementation
    init char1 counter
    // hd hl
    1. we should go throw character and check and saving counter of char1
      if char1 > char2 ? break;
      if char1 === char2 ? continue
      if char1 < char2 ? return false
      if char1 or char2 === null ? break
    2. if char1.length > char2.length return false
  3. iterate array use function
*/

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz") === true);
console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz") === false);
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz") === false);
console.log(isAlienSorted(["kuvp", "q"], "ngxlkthsjuoqcpavbfdermiywz") === true);
