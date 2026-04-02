class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length - 1
        let maxWater = 0

        while (l<r){
            const h= Math.min(heights[l],heights[r])
            const width = r - l
            maxWater = Math.max(maxWater, h*width)
            if (heights[r] > heights[l]){
                l++
            } else {
                r--
            }
        }
        return maxWater
    }
}
