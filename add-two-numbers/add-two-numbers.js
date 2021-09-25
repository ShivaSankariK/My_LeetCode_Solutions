/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode();
    let answerPointer = head;
    
    let carry = 0;
    
    while(l1 || l2 || carry){
        
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        
        answerPointer.next = new ListNode(sum % 10);
        answerPointer = answerPointer.next;
        
        carry = parseInt(sum / 10);
        
        l1 = l1?.next;
        l2 = l2?.next;
    }
    
    return head.next;
};