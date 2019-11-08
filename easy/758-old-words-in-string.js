/**
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
var boldWords = function(words, S) {
  const N = S.length, mask = new Array(N).fill(false), ans = [];
  for(let i = 0; i < N; i++) {
    for(let j = 0; j < words.length; j++) {
      const word = words[j];
      updateMask(mask, word, S, i);
    }
  }

  for(let i = 0; i < N; i++) {
    if (mask[i] && (i === 0 || !mask[i-1])) {
      ans.push('<b>');
    }
    ans.push(S[i]);
    if (mask[i] && (i === N - 1 || !mask[i+1])) {
      ans.push('</b>');
    }
  }
  return ans.join('');
};

function updateMask(mask, word, S, i) {
  for(let j = 0; j < word.length; j++) {
    if (i + j > S.length || S[i+j] !== word[j]) {
      return;
    }
  }
  for (let j = i; j < word.length + i; j++) {
    mask[j] = true;
  }
}

console.log(boldWords(["ab", "bc"], 'aabcd'));
