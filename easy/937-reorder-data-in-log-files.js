/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  function getLog(str){ // get after-identifier part of log
    return str.slice(str.indexOf(' ')+1);
  }

  function isDigitalStr(str){  // the condition is that either ALL str[i] are digits or they ALL are symbols
    // so we may check str[0] only
    return (str[0] >= '0' && str[0] <= '9') ? true : false;
  }

  function compare(a, b){  // main comparing function for 2 strings, if they're equal then compares identifiers
    let res = getLog(a).localeCompare(getLog(b));
    return (res == 0) ? a.slice(0, a.indexOf(' ')).localeCompare(b.slice(0, b.indexOf(' '))) : res;
  }

  let resLogs = []; // the resulting array: all digital logs will go into it befor symbol logs
  let symbolLogs = []; // the array for sorting symbol logs

  for(let i = 0; i < logs.length; i++){
    if(isDigitalStr(getLog(logs[i])))
      resLogs.push(logs[i]);
    else
      symbolLogs.push(logs[i]);
  }

  return [...symbolLogs.sort(compare), ...resLogs];
};

console.log(reorderLogFiles(["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]));
