class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const arr = position.map((el,i)=>{
            return {position: el, speed: speed[i]}
        }).sort((a,b)=> b.position-a.position )

        let fleet = 0;
        let prevTime = 0
        arr.forEach((el=>{
            const h = (target - el.position) / el.speed

            if (prevTime < h){
            fleet++
            prevTime = h
            }

        }))

        return fleet
    }
}
