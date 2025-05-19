/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    if(nums.length !== 3){
        return "none";
    }
   var sumOfFirstTwoSides = nums[0]+ nums[1];
   var sumOfSecondTwoSides = nums[1] + nums[2];
   var sumOfThirdTwoSides = nums[2] + nums[0];
   if(sumOfFirstTwoSides <= nums[2]){
        return "none";
   }
    if(sumOfSecondTwoSides <= nums[0]){
        return "none";
   }
   if(sumOfThirdTwoSides <= nums[1]){
        return "none";
   }
    if(nums[0] === nums[1] && nums[1] === nums[2]){
        return "equilateral"
    }
    if(nums[0] === nums[1] || nums[1] === nums[2] || nums[2] === nums[0]){
        return "isosceles"
    }
     if(nums[0] !== nums[1] && nums[1] !== nums[2]){
        return "scalene"
    }

};