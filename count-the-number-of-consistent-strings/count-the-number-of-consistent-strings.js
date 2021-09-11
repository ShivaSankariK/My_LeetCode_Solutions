/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    var alphaArr = allowed.split("");
    var wordStr = words.join(",");
    var count = 0;
        for(var i=0; i<alphaArr.length;i++){
          wordStr = wordStr.replaceAll(alphaArr[i],"");
        }
    var wordArr = wordStr.split(",");
    for(var i=0; i<wordArr.length;i++){
        if(wordArr[i] === ""){
            count++;
        }
    }
    return count;
};