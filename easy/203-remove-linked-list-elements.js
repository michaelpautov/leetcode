/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (head === null) return head;
  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      break;
    }
  }
  let t = head;
  while (t !== null && t.next !== null) {
    if (t.next.val === val) {
      t.next = t.next.next;
    } else {
      t = t.next;
    }
  }
  return head;
};
