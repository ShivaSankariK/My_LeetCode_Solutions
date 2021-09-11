/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    if(nums === null || nums.length === 0) return 0;
    
    const opr = (arr) => {
        let v1 = 0;
        let v2 = 0;
        for(let i =0; i< arr.length; i++){
            [v1,v2] = [Math.max(v1, v2+arr[i]), v1];
        }
        return v1;
    };
    nums.sort((a,b)=> a-b);
    let dp = new Array(nums[nums.length-1]+1).fill(0);
    for(let num of nums){
        dp[num] += num;
        
    }
    return opr(dp);
};