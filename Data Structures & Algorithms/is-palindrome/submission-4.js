class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
isPalindrome(s) {


        const newS = s.toLowerCase().replaceAll(" ", '').replace(/[^a-zA-Z0-9]/g, '')

        let l = 0
        let r = newS.length - 1
        
        for (let i = 0; i<newS.length; i++){
            if (newS[l] !== newS[r]){
                console.log(newS)
                return false
            } 
            l++
            r--
        }
        return true
    }
}
