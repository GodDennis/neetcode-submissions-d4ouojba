class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let maxProffit = 0;

        while (l < prices.length){
            let r = l + 1
            while(r < prices.length){
                maxProffit = Math.max(maxProffit, prices[r] - prices[l]) 
                r++
            }
            l++
        }

        return maxProffit
    }
}
