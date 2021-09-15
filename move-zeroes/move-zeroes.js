/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    const len = nums.length;
    let s = 0;
    while (s < len) {
        if (nums[s] == 0) {
            count++;
        } else {
            if (count > 0) {
                nums[s - count] = nums[s];
                nums[s] = 0;
            }
        }
        s++;
    }
};