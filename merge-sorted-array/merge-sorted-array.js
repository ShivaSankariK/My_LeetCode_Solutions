/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (!nums2.length) {
        return;
    }
	
    let totalIndex = m + n - 1;
    let m1 = m - 1;
    let n1 = n - 1;
	
    while (n1 > -1) {
        if (nums1[m1] !== undefined && nums1[m1] > nums2[n1]) {
            nums1[totalIndex] = nums1[m1];
            m1--;
        } else {
            nums1[totalIndex] = nums2[n1];
            n1--;
        }
        totalIndex--;
    }
};