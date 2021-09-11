/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    var jewelArr = jewels.split('');
    var count = 0;
    for(var char of stones){
        if(jewelArr.indexOf(char) >= 0){
            count++;
        }
    }
    return count;
};