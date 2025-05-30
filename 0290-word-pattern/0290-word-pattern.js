/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let words = s.split(" ");
  if(words.length !== pattern.length){
    return false
  }
  var charToWord = new Map();
  var wordToChar = new Map();
  for(let i=0; i<pattern.length; i++){
    const word = words[i];
    const char = pattern[i];
   if ((charToWord.has(char) && charToWord.get(char) !== word) || 
            (wordToChar.has(word) && wordToChar.get(word) !== char)) {
            return false;
        }
    charToWord.set(char, word);
    wordToChar.set(word, char);
  }
  return true;
};