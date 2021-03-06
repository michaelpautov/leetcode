/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  if (intervals.length === 0) return 0;
  if (intervals.length === 1) return 1;
  const starts = [...intervals].sort((a, b) => a[0] - b[0])
  const ends = [...intervals].sort((a, b) => a[1] - b[1])
  let rooms = 0
  let end = 0
  for(let i = 0; i < starts.length - 1; i++) {
    if (starts[i][0] < ends[end][1]) {
      rooms++
    } else {
      end++
    }
  }
  return rooms
};

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]) === 2);
console.log(minMeetingRooms([[7, 10], [2, 4]]) === 1);
console.log(minMeetingRooms([[0, 5], [6, 7], [5,7], [1,4], [0, 7]]) === 3);
console.log(minMeetingRooms([[2, 15], [36, 45], [9, 29], [16, 23], [4, 9]]) === 2);
