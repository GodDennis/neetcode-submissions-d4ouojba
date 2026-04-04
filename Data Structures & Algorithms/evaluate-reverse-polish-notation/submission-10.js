class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const map = ["+", "-", "*", "/"]
        const stack = []
        for (let char of tokens){
            if (!map.includes(char)){
                stack.push(Number(char))
            } 
            if (char === "+"){
                const b = stack.pop()
                const a = stack.pop()
                stack.push(a + b)
            }
            if (char === "-"){
                const b = stack.pop()
                const a = stack.pop()
                stack.push(a-b)
            }
            if (char === "*"){
                const b = stack.pop()
                const a = stack.pop()
                stack.push(a*b)
            }
            if (char === "/"){
                const b = stack.pop()
                const a = stack.pop()
                stack.push(Math.trunc(a/b))
            }
        }
        return stack[stack.length - 1]
    }
}
