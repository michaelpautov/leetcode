/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let hash = {};
  let countA = 0;
  let countB = 0;
  for(let i = 0; i < 10; i++) hash[i] = 0;
  for(let i = 0; i < secret.length; i++) {
    const s = secret[i], g = guess[i];
    if (g === s) {
      countA++
    } else {
      if (hash[s] < 0) countB++;
      if (hash[g] > 0) countB++;
      hash[s]++;
      hash[g]--;
    }
  }
  return `${countA}A${countB}B`;
};

console.log(getHint("1234", "0111") === '0A1B');
console.log(getHint("1122","1222") === "3A0B");
