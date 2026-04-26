class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let chars = strs[0].split("");
        let arr = strs.slice(1);
        let res = ''

        for (let i = 0; i<chars.length; i++){
            let temp = chars.slice(0,i+1).join('');
            let counter = 0;
            for (let j = 0; j<arr.length; j++ ){
                if (arr[j].startsWith(temp)){
                    counter++
                }
            }
            if (counter === arr.length) res = temp 
            else break
        }
        return res
    }
}
