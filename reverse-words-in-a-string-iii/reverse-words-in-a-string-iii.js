/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var str = s.split(' ');
    var newStr = [];
    for(var i=0; i<str.length; i++){
       var reversedstr = str[i].split('').reverse().join('');
        newStr.push(reversedstr);
    }
    return newStr.join(' ');
};