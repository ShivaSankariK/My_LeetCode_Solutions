/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    var arr = [];
    var strArr = s.split("");
    var strlen = s.length;
    for( var i = 0; i<strlen; i++){
        arr[indices[i]] = strArr[i];
    }
    return arr.join("");
};