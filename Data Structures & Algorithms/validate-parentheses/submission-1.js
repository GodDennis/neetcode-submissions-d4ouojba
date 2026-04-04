class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        let map = {
            "[":"]",
            "{":"}",
            "(":")",
        }
        for (let char of s){ 
            if (Object.keys(map).includes(char)){
                stack.push(char)
                continue
            } else if (map[stack[stack.length - 1]] === char ) {
                stack.pop(char)
                continue
            } else {
                return false
            }
        }
        return stack.length === 0 ? true : false
    }
}
