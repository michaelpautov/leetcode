/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const hash = {};
  for(let i = 0; i < wordDict.length; i++) {
    hash[wordDict[i]] = true;
  }
  let dp = new Array(s.length + 1);
  dp[0] = true;
  for(let i = 1; i <= s.length; i++) {
    for(let j = 0; j < i; j++) {
      if (dp[j] && hash[s.substring(j, i)]) {
        dp[i] = true;
        break;
      }
    }
  }
  return !!dp[dp.length - 1]
};


console.log(wordBreak("leetcode", ["leet", "code"]) === true);
console.log(wordBreak("applepenapple", ["apple", "pen"]) === true);
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]) === false);
