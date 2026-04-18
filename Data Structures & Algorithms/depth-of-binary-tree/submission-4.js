/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    sum(root){

        if (!root) return 0

        if (!root.left && !root.right){
            return 1
        }

        if (root.left || root.right){
            return Math.max(this.sum(root.left),this.sum(root.right)) + 1
        }

    }

    maxDepth(root) {
        return this.sum(root)
    }
}
