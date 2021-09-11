/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    var balanced = 0;
    var count = 0;
    for(var i=0; i<s.length;i++){
        if(s[i] === 'L'){
            balanced++;
        }else{
            balanced--;
        }
         if(balanced === 0){
        count++;
    }
    }
    return count;
   
};