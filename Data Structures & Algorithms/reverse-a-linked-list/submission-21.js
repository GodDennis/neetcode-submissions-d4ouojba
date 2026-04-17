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
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head
        let prev = null

        while(curr !== null){
            let tempNext = curr.next //1
            curr.next = prev //1 => 0
            prev = curr //0
            curr = tempNext // 1
         }

        return prev
    }
}
