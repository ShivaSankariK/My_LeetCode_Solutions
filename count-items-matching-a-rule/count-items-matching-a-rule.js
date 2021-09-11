/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    var count = 0;
    for(var i=0;i<items.length; i++){
        if(ruleKey === "type"){
            if(items[i][0] === ruleValue){
                count++;
            }
        }
        if(ruleKey === "color"){
            if(items[i][1] === ruleValue){
                count++;
            }
        }
         if(ruleKey === "name"){
            if(items[i][2] === ruleValue){
                count++;
            }
        }
    }
    return count;
};