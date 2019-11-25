/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
  const students = {};
  for (let student of items) {
    let [id, score] = student;
    if (!students[id]) students[id] = [score];
    else students[id].push(score);
  }
  const averages = {};
  for (let student in students) {
    students[student] = students[student].sort((a, b) => b-a).slice(0, 5);
    averages[student] = Math.floor(students[student].reduce((a, b) => a+b)/5);
  }
  return Object.keys(averages).reduce((acc, cur) => {
    acc.push([cur, averages[cur]]);
    return acc;
  }, []);
};
