/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
        const n = nums.length; // Get the length of the nums array
  
    // Initialize a difference array with an extra space, filled with zeros
    const differenceArray = Array(n + 1).fill(0);
  
    // Apply the queries to the difference array
    for (const [left, right] of queries) {
        ++differenceArray[left];
        --differenceArray[right + 1];
    }

    let currentSum = 0; // Variable to keep track of the cumulative sum of the difference array
  
    // Iterate over 'nums' and check if each element can be zero
    for (let i = 0; i < n; ++i) {
        currentSum += differenceArray[i]; // Update the current sum
        if (nums[i] > currentSum) { // Check if current element in nums is greater than current sum
            return false; // If yes, return false as it's not possible to make it zero
        }
    }
    return true; // If all elements can be zeroed, return true

};