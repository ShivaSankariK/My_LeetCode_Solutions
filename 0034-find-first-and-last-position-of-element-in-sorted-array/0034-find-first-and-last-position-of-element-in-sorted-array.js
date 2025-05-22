/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
      let targetFirstOccurence = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target && targetFirstOccurence === -1) {
            targetFirstOccurence = i;
        } else if (nums[i] > target) {
            if (targetFirstOccurence !== -1) {
                return [targetFirstOccurence, i - 1];
            } else {
                return [-1, -1];
            }
        }
    }

    return targetFirstOccurence === -1 ? [-1, -1] : [targetFirstOccurence, nums.length - 1];
};