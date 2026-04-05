class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    findGoodArray(val, target){
        return val[val.length - 1] >= target
    }

    findGoodIdx(val, target){
        return val > target
    }

    searchMatrix(matrix, target) {
        let top = 0;
        let bottom = matrix.length - 1;
        let row = -1;

        while (top<=bottom){
            const m = Math.floor((top+bottom)/2)
            if (this.findGoodArray(matrix[m], target)){
                bottom = m - 1
                row = m
            } else {
                top = m + 1
            }
        }
        
        if (row === -1) return false
        let array = matrix[row];
        let l = 0
        let r = array.length - 1
        while(l<=r){
            const m = Math.floor((l+r)/2)
            if (this.findGoodIdx(array[m], target)){
                r = m - 1
            } else {
                l = m + 1
            }
        }

        // return [l, r]
        return array[r] === target

      
        // return matrix[l][elL] === target ? true : false
    }
}
