/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var str = s.split(' ');
    for(let i=str.length-1; i>=0; i--){
        if(str[i].length > 0){
            return str[i].length;
        }
    }
};