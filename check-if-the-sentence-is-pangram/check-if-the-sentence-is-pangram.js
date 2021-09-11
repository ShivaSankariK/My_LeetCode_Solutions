/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphaArr = alphabet.split("");
    var count = 0;
    if(sentence.length >= alphaArr.length){
        for(var i=0; i<sentence.length;i++){
           if(sentence.indexOf(alphaArr[i]) >= 0){
               count++;
           } 
        }
    }
    return count >= 26 ? true : false;
};