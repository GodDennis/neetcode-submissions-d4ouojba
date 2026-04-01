class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let competitor = [undefined, undefined];
        for (let i = 0; i < nums.length; i++){
            competitor = [i, nums[i]]
            for (let j =0; j<nums.length; j++){
                if (j === competitor[0]){
                    continue
                }
                if (competitor[1]+nums[j]===target){
                    return [i, j]
                }
            }
        }
    }
}
