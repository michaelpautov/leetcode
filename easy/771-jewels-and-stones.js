var numJewelsInStones = function(J, S) {
  const jSet = new Set(J);
  let result = 0;
  for (let i = 0; i < S.length; i++) {
    if(jSet.has(S[i])) {
      result++;
    }
  }
  return result;
};

console.log(numJewelsInStones('aA', 'aaaAABBaa'));
console.log(numJewelsInStones('a', 'ccAbBB'));
console.log(numJewelsInStones('', ''));
console.log(numJewelsInStones('a', ''));
console.log(numJewelsInStones('', 'b'));
