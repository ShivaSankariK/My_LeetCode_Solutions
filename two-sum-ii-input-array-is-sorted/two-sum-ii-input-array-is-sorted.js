/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
   var obj = {};
   for(var i =0; i<numbers.length; i++){
       let val = numbers[i];
       let diff = target - numbers[i];
       if(obj[diff] !== undefined){
           return [obj[diff], i+1];
       } else {
           obj[val] = i+1;
       }
   } 
};