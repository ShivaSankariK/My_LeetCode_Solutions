/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var arr = [];
    for(var i=0;i<nums.length; i++){
        arr.push(nums[i]*nums[i]);
    }
    var res = arr.sort((a,b) =>{
        return a - b;
    });
    return res;
};