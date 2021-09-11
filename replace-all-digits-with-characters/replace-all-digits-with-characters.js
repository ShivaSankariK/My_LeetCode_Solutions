/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    var obj = {
        1:"a",
        2:"b",
        3:"c",
        4:"d",
        5:"e",
        6:"f",
        7:"g",
        8:"h",
        9:"i",
        10:"j",
        11:"k",
        12:"l",
        13:"m",
        14:"n",
        15:"o",
        16:"p",
        17:"q",
        18:"r",
        19:"s",
        20:"t",
        21:"u",
        22:"v",
        23:"w",
        24:"x",
        25:"y",
        26:"z"
    }
    var str = s.split("");
    let index = 0;
    let previousIndex = 0;
    for(var i=0; i< s.length; i++){
        if(i%2 !== 0){
            index = Number(str[i]);
            let key = Object.keys(obj).find(key => obj[key] === str[i-1]);
           str[i] = obj[Number(key) + index];
        }
    }
    return str.join("");
};