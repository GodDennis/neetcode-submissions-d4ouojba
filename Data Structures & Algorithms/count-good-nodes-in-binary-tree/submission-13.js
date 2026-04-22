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
    goodNodes(root) {
        if (!root) return 0
        let sum = 0
        function dfs(node, maxValue){
            if (!node) return

            if (node.val >= maxValue) {
                sum++
                maxValue = node.val
            }

            if (node.left) dfs(node.left, maxValue)
            if (node.right) dfs(node.right, maxValue)
        }

        dfs(root, root.val)
        return sum
    }
}
