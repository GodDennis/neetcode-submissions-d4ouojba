/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let size = 0;
    
        let curr = head

        while(curr !== null){
            curr = curr.next
            size += 1
        }

        let index = size - n

        if (index === 0) {
            return head.next;
        }

        let counter = 0;
        curr = head

        while (counter < index - 1){
                curr = curr.next
                counter++
        }

        curr.next = curr.next.next

        return head
    }
}
