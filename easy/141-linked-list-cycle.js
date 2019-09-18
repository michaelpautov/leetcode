/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow = head, fast = head;
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return true
  }
  return false
};


var hasCycle = function (head) {
  const hash = new Set();
  while (head.next !== null) {
    if (hash.has(head)) {
      return true;
    } else {
      hash.add(head)
    }
    head = head.next
  }
  return false
}
