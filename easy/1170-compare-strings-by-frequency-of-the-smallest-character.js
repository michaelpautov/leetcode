/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  let wordsFreq = [];
  for(let i = 0; i < words.length;i++) {
    wordsFreq.push(smallestCharacterFrequency(words[i]));
  }
  let ans = [];
  for(let i = 0; i < queries.length;i++) {
    const queryFrequency = smallestCharacterFrequency(queries[i]);
    let queryCount = 0;
    for(let j = 0; j < wordsFreq.length;j++) {
      const wordFreq = wordsFreq[j];
      if (queryFrequency < wordFreq) {
        queryCount++;
      }
    }
    ans.push(queryCount);
  }
  return ans;
};

function smallestCharacterFrequency(word) {
  let arr = word.split('');
  arr.sort((a, b) => a.localeCompare(b));
  let i = 1;
  while (i < arr.length) {
    if (arr[i-1] !== arr[i]){
      return i;
    }
    i++;
  }
  return i;
}/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */


console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]));
console.log(numSmallerByFrequency(["bbb","cc"], ["a","aa","aaa","aaaa"]));
