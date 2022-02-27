/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    var replaceArr=[-1];
    var max=-1;
    if(arr.length === 1){
        return replaceArr;
    }
    for(var i=arr.length-1; i>0; i--){
       
          if(max < arr[i]){
            max = arr[i]; 
         }
         replaceArr.push(max);
    }
    return replaceArr.reverse();
};