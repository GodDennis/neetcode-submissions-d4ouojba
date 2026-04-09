class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const sorted = position.map((pos,i)=>({pos, speed:speed[i]}))
        .sort((a,b)=>b.pos-a.pos)

        let prevTime = -1;
        let res = 0
        for (let i = 0; i<sorted.length; i++){
            const time = (target - sorted[i].pos)/sorted[i].speed
            if (time>prevTime){
                prevTime = time
                res++
            }
        }

        return res
    }
}
