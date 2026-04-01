class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqeNums = new Set(nums)

        return Array.from(uniqeNums).length < nums.length

    }
}
