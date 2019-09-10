/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let hash = {}
  if (S.length !== T.length){
    return false
  }
  for (let s of S){
    hash[s] = (hash[s] ? hash[s] + 1 : 1)
  }
  for (let t of T){
    if (!hash[t] || hash[t] === 0){
      return false
    }
    else {
      hash[t] -= 1
    }
  }
  return true
};

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))
