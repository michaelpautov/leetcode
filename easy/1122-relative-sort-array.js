/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const hash = {};
  for(let i = 0; i < arr1.length; i++) {
    const v=  arr1[i];
    if (hash[v]) {
      hash[v]++;
    } else {
      hash[v] = 1;
    }
  }
  let res = [];
  for(let i = 0; i < arr2.length; i++) {
    const v = arr2[i];
    while (hash[v] > 0) {
      res.push(v);
      hash[v]--;
    }
    delete hash[v];
  }
  Object.keys(hash).forEach(key => {
    while (hash[key] > 0) {
      res.push(parseInt(key));
      hash[key]--;
    }
  });
  return res;
};

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
