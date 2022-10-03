/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  if (!head) return null;
  
  let tracker = head;
  let count = 0;
  
  while (head) {
      head = head.next;
      count++;
  }
  
  // now that we've found the count
  // Now we've converted our problem into remove (count - n)th from the beginning.
  let targetOrder = count - n + 1; // one-off error? I don't think so
  let prevOrder = count - n; 
  let newHead = tracker; // we will return this output
  
  for (let i = 0; i < prevOrder - 1; i++) {
      tracker = tracker.next;
  }
  tracker.next = tracker.next.next;
  
  return newHead;
};

function ListNode(val, next) {
this.val = (val===undefined ? 0 : val)
this.next = (next===undefined ? null : next)
}

let head1 = new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(7))));
removeNthFromEnd(head1, 2);

// O(n)