/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const hash = {};
  for(let i = 0; i < secret.length; i++) {
    if (hash[secret[i]]) {
      hash[secret[i]]++;
    } else {
      hash[secret[i]] = 1;
    }
  }
  let a = 0, b = 0;
  for(let i = 0; i < guess.length;i++) {
    const n1 = parseInt(secret[i]), n2 = parseInt(guess[i]);
    if (n1 === n2) {
      a++;
      if (hash[n2] > 0) {
        hash[n2]--;
      }
    } else if (hash[n2] > 0) {
      b++;
      hash[n2]--;
    }
  }
  return `${a}A${b}B`;
};

/*
  if value equal we update A
  if value not equal add that value to store

*/

// console.log(getHint("1234", "0111") === '0A1B');
console.log(getHint("1122","1222") === "3A0B");
// console.log(getHint("1123","0111") === "1A1B");
