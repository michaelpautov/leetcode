/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  let ans = 0;
  for (let i = L; i <= R; i++) {
    const c = getBitCount(i);
    if (isSmallPrime(c)) {
      ans++;
    }
  }
  return ans;
};

function getBitCount(value) {
  const bitString = value.toString(2);
  let ans = 0;
  for (let i = 0; i < bitString.length; i++) {
    if (bitString[i] === '1'){
      ans++;
    }
  }
  return ans;
}

function isSmallPrime(n) {
  if (n === 2 || n === 3 || n === 5 ||  n === 7 || n === 11 || n === 13|| n === 17 || n === 19) {
    return true;
  }
  return false;
}

console.log(countPrimeSetBits(990, 1048));
