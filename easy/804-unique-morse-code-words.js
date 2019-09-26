/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let hash = {};
  for(let i = 0; i < words.length; i++) {
    const morse = getMorse(words[i]);
    if (!hash[morse]) {
      hash[morse] = true;
    }
  }
  return Object.keys(hash).length
};

var morseDict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

var getMorse = function (word) {
  let res = '';
  for (let i = 0; i < word.length; i++) {
    res += morseDict[word[i].charCodeAt(0) - 97]
  }
  return res;
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
