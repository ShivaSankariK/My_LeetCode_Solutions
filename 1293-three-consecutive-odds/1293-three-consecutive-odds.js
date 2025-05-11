/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    var count = 0;
    if(arr.length >=1 && arr.length <= 1000){
        if(arr.length === 3){
            if(arr[0]%2 !==0){
                if(arr[1]%2 !== 0){
                    if(arr[2]%2 !== 0){
                        count++;
                    }
                }
            }
        } else {
        for(let i=0; i<arr.length-2; i++){
            if(arr[i]%2 !==0){
                if(arr[i+1]%2 !== 0){
                    if(arr[i+2]%2 !== 0){
                        count++;
                    }
                }
            }
        }
    }
    }
    return count > 0 ? true : false;
};