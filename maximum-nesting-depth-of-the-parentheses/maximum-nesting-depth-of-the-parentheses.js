/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
var currentMax = 0;
    var max = 0;
    for(var i=0; i<s.length;i++){
        if(s[i] === '('){
            currentMax++;
            if(currentMax > max){
                max = currentMax;
            }
        }
        else if(s[i] === ")"){
            
            if(currentMax > 0){
               currentMax--;
               }
        }
    }
   
    return max;
};