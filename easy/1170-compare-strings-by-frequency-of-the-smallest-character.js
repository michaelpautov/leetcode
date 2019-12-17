/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  const A2 = [];
  for(let i = 0; i < words.length; i++) {
    A2.push(smallestCharacter(words[i]));
  }
  const answer = [];
  for(let i = 0; i < queries.length; i++) {
    const query = smallestCharacter(queries[i]);
    let count = 0;
    for(let j = 0; j < A2.length; j++) {
      const word = A2[j];
      if (query < word) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
};

function smallestCharacter(word) {
  let s = word.split('');
  s.sort();
  let c = 1;
  for(let i = 1; i < s.length && s[i - 1] === s[i] ;i++) {
    c++;
  }
  return c;
}

console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]));
console.log(numSmallerByFrequency(["bbb","cc"], ["a","aa","aaa","aaaa"]));
