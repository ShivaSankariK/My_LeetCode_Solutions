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
     let ptr1 = head;
    let ptr2 = head;
    let cnt=0;
   
    while(cnt<n){
        //move ptr2 n steps
        ptr2=ptr2.next;
        cnt++;
    }
    if(!ptr2){
        //ptr2 reached the end -that means n  = len of linked list - hence remove the first node and return;
        return head.next;
    }

    while(ptr2.next){
        //now move ptr1 to be one step before the node to be removed.
        ptr1=ptr1.next;
        ptr2=ptr2.next; 
    }
    
   //check to see if there are nodes after the node to be removed.
    let temp = ptr1.next? ptr1.next.next:null;
    ptr1.next=temp;
    return head;
};