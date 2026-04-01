class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}

        for (let i = 0; i < nums.length; i++){
            if (!map[nums[i]]){
            map[nums[i]] = 0
            }
            map[nums[i]]++
        }

       const resArr = Object.entries(map).sort((a,b)=>b[1]-a[1])
       
      const res = resArr.slice(0, k).map(entry => Number(entry[0]))
       return res
    }
}
