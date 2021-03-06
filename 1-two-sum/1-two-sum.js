/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var obj ={};
    for(var i=0; i<nums.length; i++){
        let diff = target - nums[i];
        if(obj[diff] !== undefined){
            return [obj[diff], i];
        } else{
            obj[nums[i]] = i;
        }
    }
};