class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    findBrokenVal(m,r){
        return m > r
    }

    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let offset = 0;

        while(l < r){
            const m = Math.floor((l+r)/2)
            if(this.findBrokenVal(nums[m], nums[r])){
                l = m + 1
                offset = l
            } else {
                r = m
            }
        }

            return nums[l]
    }
}
