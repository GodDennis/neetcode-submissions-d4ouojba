class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {}

        for (let i = 0; i < strs.length; i++){
            const sortedStr = strs[i].split('').sort().join('')
            if (!!obj[sortedStr]){
                obj[sortedStr] = [strs[i], ...obj[sortedStr]]
            } else {
                obj[sortedStr] = [strs[i]]
            }
        }  
       return Object.values(obj)
    }

}
