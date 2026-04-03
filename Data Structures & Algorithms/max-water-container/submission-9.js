class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxWater = 0;

        while (l<r){
            const width = r - l
            const h = Math.min(heights[l], heights[r])
            const water = width * h
            maxWater = Math.max(maxWater, water)

            if (heights[l]>heights[r]){
                r--
            } else {
                l++
            }
        }
        return maxWater
    }
}
