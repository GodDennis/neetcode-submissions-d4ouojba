class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1
        while (l<=r){
            const indexDiff = r + l;
            const center = Math.floor(indexDiff/2)
            
            if (nums[center] === target){
                return center
            } else if (nums[center]>target){
                r = center - 1
            } else {
                l = center + 1
            }             
        }
                     return -1   
    }
}
