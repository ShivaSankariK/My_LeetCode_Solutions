/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var mergedArr = [];
    var i = 0;
    var j = 0;
    while(i < nums1.length && j < nums2.length){
        if(nums2[j] > nums1[i]){
            mergedArr.push(nums1[i]);
            i++;
        } else {
            mergedArr.push(nums2[j]);
            j++;
        }
    }
    while(i < nums1.length){
        mergedArr.push(nums1[i]);
        i++;
    }
     while(j < nums2.length){
        mergedArr.push(nums2[j]);
        j++;
    }
    if(mergedArr.length === 1){
        return mergedArr[0];
    }
    var mid = Math.floor((mergedArr.length) / 2);
    return mergedArr.length % 2 !== 0 ? mergedArr[mid] : (mergedArr[mid - 1] + mergedArr[mid]) / 2;
    
};