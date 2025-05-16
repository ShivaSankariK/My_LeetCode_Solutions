/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var formattedStr = s.replace(/[\W_]/g, '');
    var reverseStr = "";
    for(let i=formattedStr.length -1; i>=0; i--){
        reverseStr = reverseStr + formattedStr[i];
    }
    if(formattedStr.toLowerCase() === reverseStr.toLowerCase()){
        return true;
    } else {
        return false;
    }
};