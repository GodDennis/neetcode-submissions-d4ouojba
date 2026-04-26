class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length
        let l = 0;
        let r = 1;
        let MaxDiff = 0;
        while (r<n){
            if (prices[l] < prices[r]){
                MaxDiff = Math.max(MaxDiff, prices[r] - prices[l])
                r++
            } else {
                l = r
                r++
            }
        }
        return MaxDiff
    }
}
