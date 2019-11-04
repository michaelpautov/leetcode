/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const stack = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const l = stack.length;
    if (op === '+') {
      stack.push(stack[l-1] + stack[l-2])
    } else if (op === 'C') {
      stack.pop();
    } else if (op === 'D') {
      stack.push(2 * stack[l-1])
    } else {
      stack.push(parseInt(op))
    }
  }
  return stack.reduce((acc, v) => acc + v, 0)
};

// console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
// console.log(calPoints(["5", "2", "C", "D", "+"]));
