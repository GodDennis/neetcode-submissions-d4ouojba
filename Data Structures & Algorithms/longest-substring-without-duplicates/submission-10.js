class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;

        let maxLength = 0;
        while (l < s.length) {
            let r = l;
            let subS = "";
            while (r < s.length) {
                if (subS.includes(s[r])) break;
                subS += s[r];
                maxLength = Math.max(maxLength, subS.length)
                r++
            }
            l++;
        }
        return maxLength;
    }
}
