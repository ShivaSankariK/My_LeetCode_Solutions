/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
     let condition = 'AEIOUaeiou';
    let vowel = []
    let finalWord = []   
   
    for(let i = 0; i < s.length; i ++) {
        if(condition.includes(s[i])) {
            vowel.push(s[i])
        }
        finalWord.push(s[i])
    }
    for(let i = 0; i < finalWord.length; i ++) {
        if(condition.includes(finalWord[i])) {
            finalWord[i] = vowel.pop();
        }
    }
    return finalWord.join('')
};