/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  let letter = [];
  let digest = [];
  for(let i = 0; i < logs.length; i++) {
    const log = logs[i];
    if (isDig(log)) {
      digest.push(log);
    } else {
      letter.push(log)
    }
  }
  letter.sort(compare);
  return [...letter, ...digest];
};

function isDig(log) {
  return !!log[log.length - 1].match(/[0-9]/);
}

function getLog(log) {
  return log.substring(log.indexOf(' ') + 1)
}

function compare(log1, log2) {
  const l1 = getLog(log1);
  const l2 = getLog(log2);
  let comp = l1.localeCompare(l2);
  if (comp === 0) {
    return log1.slice(0, log1.indexOf(' ')).localeCompare(log2.slice(0, log2.indexOf(' ')))
  }
  return comp;
}

// console.log(isDig('dig1 8 1 5 1') === true);
// console.log(isDig('dig1 8 1 5 2312a') === false);
// console.log(getLog('dig1 8 1 5 2312a') === '8 1 5 2312a');
// console.log(getLog('dig1 8 1 5 2312a'));

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]));
console.log(reorderLogFiles(["t kvr", "r 3 1", "i 403", "7 so", "t 54"]));
console.log(["t kvr", "7 so", "r 3 1", "i 403", "t 54"]);
