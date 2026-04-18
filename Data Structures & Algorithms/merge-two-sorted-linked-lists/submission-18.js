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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let empty = new ListNode(0)
        let curr = empty

        while(list1 !== null || list2 !==null){
            if (list1 === null || (list2 !== null && list2.val <= list1.val )){
                curr.next = list2
                list2 = list2.next
            } else {
                curr.next = list1
                list1 = list1.next
            }
            curr = curr.next
        }
        return empty.next
    }
}
