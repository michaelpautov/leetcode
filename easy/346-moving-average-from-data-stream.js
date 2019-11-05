/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.size = size;
  this.slides = [];
  this.windowSum = 0;
  this.count = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.count++;
  this.slides.push(val);
  const tail = this.count > this.size ? this.slides.shift() : 0;
  this.windowSum = this.windowSum - tail + val;
  return this.windowSum / Math.min(this.size, this.count);
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */


let m = new MovingAverage(3);
m.next(1)
m.next(10)
m.next(3)
m.next(5)

console.log(m);
