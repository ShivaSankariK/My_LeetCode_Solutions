/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    var arr = s.split(" ");
    var arr1 = [];
    for(var i=0; i<k; i++){
        arr1.push(arr[i]);
    }
    return arr1.join(" ");
};