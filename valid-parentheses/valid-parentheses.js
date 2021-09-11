/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
let map ={
    "(": ")",
    "{": "}",
    "[": "]",
};
    var arr = [];
   for (const paran of s) {
    if (map.hasOwnProperty(paran)) {
      arr.push(paran)
    } else {
      const closeParan = arr.pop();
      if (paran !== map[closeParan]) {
        return false;
      }
    }
  }

  return arr.length === 0;
};