/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
//     let lastIndex = nums.length - 1
    
//     for (var i = 0; i < k; i++) {
//         nums.unshift(nums[lastIndex]);
//         nums.pop();        
//     }
   let j = nums.length - k % nums.length;
    let arr = [...nums];
    for(let i=0; i<nums.length; i++) {
        if(j === nums.length) {
            j = 0;
        }
        nums[i] = arr[j];
        j++;
    }
    
};