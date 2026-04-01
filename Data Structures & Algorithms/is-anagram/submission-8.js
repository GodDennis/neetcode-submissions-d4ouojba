class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const newS = s.split("").sort().join('')
        const newT = t.split('').sort().join('')

        return newS === newT

        
    }
}
