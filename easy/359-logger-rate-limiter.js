/**
 * Initialize your data structure here.
 */
var Logger = function() {
  this.hash = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
 If this method returns false, the message will not be printed.
 The timestamp is in seconds granularity.
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  const lastTimestamp = this.hash[message]
  if (lastTimestamp !== undefined) {
    if (lastTimestamp + 10 <= timestamp) {
      this.hash[message] = timestamp;
      return true;
    }
    return false;
  } else {
    this.hash[message] = timestamp;
    return true;
  }
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
