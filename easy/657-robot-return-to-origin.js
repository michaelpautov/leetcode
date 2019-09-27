/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  if (!moves) return true;
  let x = 0, y = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'U':
        x += 1;
        break;
      case 'D':
        x -= 1;
        break;
      case 'R':
        y += 1;
        break;
      case 'L':
        y -= 1;
        break;
    }
  }
  return x === 0 && y === 0;
};

console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));
console.log(judgeCircle("LL"));
