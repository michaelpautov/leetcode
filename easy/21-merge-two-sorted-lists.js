/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2)
    return l1 || l2

  if (l1.val>l2.val)
    [l1, l2] = [l2, l1]

  l1.next = mergeTwoLists(l1.next, l2)

  return l1;
};

const list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
};

const list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}

console.log(JSON.stringify(mergeTwoLists(list1, list2)))
