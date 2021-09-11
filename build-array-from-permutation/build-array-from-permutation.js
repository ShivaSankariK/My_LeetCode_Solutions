/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    var arr1 = [];
    var len = nums.length;
    
    for (var i =0; i< len; i++){
        var val = nums[i];
        arr1.push(nums[val])
    }
    return arr1;
};