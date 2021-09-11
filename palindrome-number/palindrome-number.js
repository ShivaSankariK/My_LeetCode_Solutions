/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr1 = x.toString();
     let arr2 = arr1.split('').reverse().join().replace(/,/g, '');
    return arr1 === arr2 ? true : false;
    
};