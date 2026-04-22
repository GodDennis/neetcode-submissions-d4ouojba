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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        let q = [root];
        let res = [];

        while (q.length > 0) {
            let levelSize = q.length
            let currentLevel = []

            for (let i = 0; i < levelSize; i++){
                const node = q.shift()

                currentLevel.push(node.val)

                if (node.left) q.push(node.left)
                if (node.right) q.push(node.right)
            }
            res.push(currentLevel)
        }
        return res
    }
}
