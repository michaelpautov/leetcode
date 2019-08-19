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
var middleNode = function(head) {
  var slowNode = head;
  var fastNode = head;
  while(fastNode !== null && fastNode.next !== null) {
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;
  }
  return slowNode;
};


const t1 = { val: 1, next: { val: 2, next: { val: 3, next: { val:4, next: { val: 5, next: null } } } } };


const t2 = { val: 1, next: { val: 2, next: { val: 3, next: { val:4, next: { val: 5, next: { val: 6, next: null } } } } } };

console.log(middleNode(t1).val === 3);
console.log(middleNode(t2).val === 4);
