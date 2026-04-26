class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length
        let l = 0;
        let MaxDiff = 0;
        while (l<n){
            let r = l + 1
            while (r < n){
                MaxDiff = Math.max(MaxDiff, prices[r] - prices[l])
                r++
            }
        l = l + 1
        }
        return MaxDiff
    }
}
