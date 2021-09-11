/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    var str = s.split(" ");
    var sortedStr = str.sort((a,b) => a[a.length-1] - b[b.length-1]);
    var result = sortedStr.map(str1 => str1.slice(0, str1.length-1));
     return result.join(" ");
};