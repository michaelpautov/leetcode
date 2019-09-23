/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const primeArr = [];
  let count = 0;
  for(let i = 2; i < n; i++) {
    if (primeArr[i] === undefined) {
      count++;
      for(let j = 2; i* j < n; j++) {
        primeArr[i * j] = true
      }
    }
  }
  return count
};


console.log(countPrimes(10));
console.log(countPrimes(6));
