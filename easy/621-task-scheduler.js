/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const map = new Array(26).fill(0);
  for(let i = 0; i < tasks.length; i++) {
    map[tasks[i].charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }
  map.sort((a,b) => a - b);
  const maxVal = map[25] - 1;
  let idleSlots = maxVal * n;
  for(let i = 24; i >= 0 && map[i] > 0; i--) {
    idleSlots -= Math.min(map[i], maxVal);
  }
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
