/**
 * Definition for singly-linked list.
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {debugger;
  let prev, next;
  
  // just focus on the current head only, don't think what to do with next one
  while (head) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
  }
                                
  return prev;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
reverseList(head);
