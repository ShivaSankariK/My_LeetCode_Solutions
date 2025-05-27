/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
     let result = [];
    let start = nums[0]; // Start at the first element

    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] != nums[i] + 1) { // if range ends here
            if (start == nums[i]) { // If range is one element only
                result.push(String(nums[i]));
            }
            else { // Add the range from start to finish
                result.push(start + "->" + nums[i]);
            }
            start = nums[i + 1]; // start a new range
        }
    }

    return result;
};