/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    var result = [];
    var count=0;
        for(var i=0;i<s.length;i++)
        {
            if(s[i]=='('){
               count++; 
            }  
            if(count>1){
                result.push(s[i]);
            } 
            if(s.charAt(i)==')'){
                count--; 
            }
        }
        return result.join("");  
};