class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {


        for (let row = 0; row<board.length; row++){
                let set = new Set()
            for (let el = 0; el<board[row].length; el++){
                if (board[row][el] === ".") continue
                if (set.has(board[row][el])) return false
                
                set.add(board[row][el])

            }
        }


        for (let el = 0; el<board.length; el++){
                let set = new Set()
            for (let col = 0; col<board[el].length; col++){
                if (board[col][el] === ".") continue
                if (set.has(board[col][el])) return false
                
                set.add(board[col][el])
            }
        }

        for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }

        return true

    }
}
