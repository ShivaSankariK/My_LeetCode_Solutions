/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function(head) {
    let middle = head;
    let count = 0;
  
    while(head.next){
      head = head.next;
      count++;
      
      if(count === 2){
        count = 0;
        middle = middle.next;
      }
    }
  
    if(count === 1) return middle.next
    return middle;
};