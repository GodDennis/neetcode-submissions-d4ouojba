class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)

        let arr = Array.from(set).sort((a,b)=> a-b)

        let stack = []
        for (let i =0; i<arr.length; i++){

            if (arr[i]+1 !== arr[i+1]) stack.push(1)
            else {
            if (!stack.length) stack.push(1)

            stack[stack.length -1] = stack[stack.length - 1] + 1
            }

        }
        // return stack
        return Number.isFinite(Math.max(...stack)) ? Math.max(...stack) : 0
    }
}
