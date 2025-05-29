/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sortedFirst = s.split("").sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())).join("");
    var sortedSecond = t.split("").sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())).join("");
    if(sortedFirst === sortedSecond){
        return true;
    }
    return false;
};