class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freq = Array(26).fill(0)
        let l = 0;
        let maxFreq = 0;
        let maxLen = 0;

        for (let r = 0; r < s.length; r++){
            let idx = s.charCodeAt(r) - 65;
            freq[idx] = freq[idx] + 1
            maxFreq = Math.max(maxFreq, freq[idx])

            while (r - l + 1 - maxFreq > k){
                const leftIdx = s.charCodeAt(l) - 65;
                freq[leftIdx] = freq[leftIdx] - 1
                l++
            }
            maxLen = Math.max(maxLen, r-l+1)
        }
        return maxLen
    }
}
