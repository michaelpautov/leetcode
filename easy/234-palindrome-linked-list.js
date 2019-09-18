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
var isPalindrome = function(head) {
  if(head == null || head.next == null) return true;
  let slow = head, fast = head;
  while(fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next
  }

  slow.next = reverse(slow.next)
  slow = slow.next
  while (slow !== null) {
    if (slow.v === head.v) {
      slow = slow.next
      head = head.next
    } else  {
      return false
    }
  }
  return true
};

var reverse = function (head) {
  let pre = null, next = null;
  while (head !== null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};
