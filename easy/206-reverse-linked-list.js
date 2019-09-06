/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head, prev = null) {
  if (head === null) return null;
  const next = reverseList(head.next, head)
  head.next = prev;
  return next || head;
};
