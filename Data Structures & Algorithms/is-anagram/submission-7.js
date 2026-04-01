class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {


        const sort = (a,b)=>{
            if(a.toLowerCase() < b.toLowerCase()){
                return -1
            }
            if (a.toLowerCase() > b.toLowerCase()){
                return 1
            }
            return 0
        }

        const newS = s.split("").sort().join('')
        const newT = t.split('').sort().join('')

        return newS === newT

        
    }
}
