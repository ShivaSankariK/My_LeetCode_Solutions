/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     let min = 0;
    let max = nums.length-1;
    if(nums.length === 1){
        if(target === nums[0]){
            return min;
        }
    }
    while(min <= max){
        let mid = Math.floor((min+max)/2);
        if(target === nums[mid]){
            return mid;
        } else if(target < nums[mid]){
            max = mid-1;
        } else {
            min = mid+1;
        }
    }
    return max+1;
};