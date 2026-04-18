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
     * @return {TreeNode}
     */

    invertNode(root){
        if (!root) return
        const tempLeft = root.left
        const tempRight = root.right

        root.left = tempRight
        root.right = tempLeft

        this.invertNode(root.left)
        this.invertNode(root.right)
    }

    invertTree(root) {
        this.invertNode(root)

        return root
    }
}
