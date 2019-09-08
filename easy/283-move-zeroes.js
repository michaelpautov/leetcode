/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let lastNotZeroElement = 0;
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNotZeroElement++] = nums[i];
    }
  }
  for(let i = lastNotZeroElement; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};


// Warn if overriding existing method
if(Array.prototype.equals)
  console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array)
    return false;

  // compare lengths - can save a lot of time
  if (this.length != array.length)
    return false;

  for (var i = 0, l=this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i]))
        return false;
    }
    else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

console.log(moveZeroes( [0,1,0,3,12]).equals([1,3,12,0,0]));
console.log(moveZeroes( [0,1,0,0,0,3,12]).equals([1,3,12,0,0,0,0]));
