class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    good(m,r){
       return m > r
    }

    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;

    while(l<r){
        const m = Math.floor((l+r)/2)
        if (this.good(nums[m],nums[r])){
            l = m + 1
        } else {
            r = m
        }
    }

        return nums[l]

    }
}
