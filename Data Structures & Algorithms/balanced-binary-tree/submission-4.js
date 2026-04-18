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
     * @return {boolean}
     */

    dfs(root){
        if (!root) return 0

        const left = this.dfs(root.left)
        const right = this.dfs(root.right)
        return  Math.max(left,right) + 1 
    }

    isBalanced(root) {
      if (root === null) return true

    let  left = this.dfs(root.left)
     let right = this.dfs(root.right)

      if (Math.abs(left - right)>1){
        return false
      }

    return this.isBalanced(root.left) && this.isBalanced(root.right)

    }
}
