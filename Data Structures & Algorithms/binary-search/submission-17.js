class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    good(val, target){
        return val <= target
    }

    search(nums, target) {
        let l = 0
        let r = nums.length

        while (r-l > 1){
            const m = Math.floor((l + r) / 2)

            if (this.good(nums[m], target)){
                l = m
            } else {
                r = m 
            }
        }

        return nums[l] === target ? l : -1
    }
}
