/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var start = 0;
    var longest = 0;
    var seen = {};
    for(var i=0; i<s.length; i++){
        let char=s[i];
        if(seen[char]){
            start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, (i-start)+1);
        seen[char] = i + 1;
    }
    return longest;
    
};