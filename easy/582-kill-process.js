/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
  const ans = [];
  if (!kill) {
    return ans;
  }
  ans.push(kill);
  for(let i = 0; i < ppid.length; i++) {
    if (ppid[i] === kill) {
      ans.push(...killProcess(pid, ppid, pid[i]))
    }
  }
  return ans;
};

console.log(killProcess([1, 3, 10, 5], [3, 0, 5, 3], 5));
