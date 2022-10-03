var mergeTwoLists = function(list1, list2) {
  debugger;
  let head;
  let prev;
  // let mergedList = list1.val <= list2.val ? list1 : list2;;
  
  while (list1 && list2) {
      if (!head) {
          head = new ListNode();
          prev= head;
      }
          
      if (list1.val <= list2.val) {
          head.next = list1;
          list1 = list1.next;
      } else {
          head.next = list2;
          list2 = list2.next;
      }
      head = head.next;
  }
  
  return prev.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let head1 = new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(7))));
let head2 = new ListNode(2, new ListNode(4, new ListNode(6, new ListNode(8))));

mergeTwoLists(head1, head2);