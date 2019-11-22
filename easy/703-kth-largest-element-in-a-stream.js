/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.data = nums;
  this.heapify();
  while (this.size() > this.k) {
    this.poll();
  }
};

KthLargest.prototype.poll = function() {
  if (this.size() === 0) {
    return null;
  }

  const result = this.data[0];
  const last = this.data.pop();

  if (this.data.length > 0) {
    this.data[0] = last;
    this.bubbleDown(0);
  }

  return result;
}


KthLargest.prototype.size = function() {
  return this.data.length;
}

KthLargest.prototype.peek = function() {
  if (this.size() === 0) {
    return null;
  }

  return this.data[0];
}

KthLargest.prototype.bubbleDown = function(pos) {
  const last = this.data.length - 1;

  while (true) {
    let left = (pos << 1) + 1;
    let right = left + 1;
    let minIndex = pos;

    if (left <= last && (this.data[left] - this.data[minIndex]) < 0) {
      minIndex = left;
    }

    if (right <= last && (this.data[right] - this.data[minIndex]) < 0) {
      minIndex = right;
    }

    if (minIndex !== pos) {
      const temp = this.data[minIndex];
      this.data[minIndex] = this.data[pos];
      this.data[pos] = temp;
      pos = minIndex;
    } else {
      break;
    }
  }
};

KthLargest.prototype.offer = function(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
}

KthLargest.prototype.heapify = function() {
  if (this.data.length > 1) {
    for (let i = 1; i < this.data.length; i++) {
      this.bubbleUp(i);
    }
  }
};


KthLargest.prototype.bubbleUp = function(pos) {
  while(pos > 0) {
    let parent = (pos - 1) >>> 1;
    if (this.data[pos] - this.data[parent] < 0) {
      const temp = this.data[parent];
      this.data[parent] = this.data[pos];
      this.data[pos] = temp;
      pos = parent;
    } else {
      break;
    }
  }
};
/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.size() < this.k) {
    this.offer(val);
  } else if (val > this.peek()) {
    this.poll();
    this.offer(val);
  }

  return this.peek();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

let kth = new KthLargest(3, [4,5,8,2]);

console.log(kth.add(3));
console.log(kth.add(5));
console.log(kth.add(10));
console.log(kth.add(9));
console.log(kth.add(4));

console.log(kth);
