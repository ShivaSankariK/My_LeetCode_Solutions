/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x > 0){
    let arr1 = x.toString();
    let arr2 = arr1.split('').reverse();
    if(arr2[0] === '0'){
        arr2.shift();
    }
    let arr3 = arr2.join().replace(/,/g, '');
    return arr3 > 2147483648 ? 0 : arr3;
    }
    if(x < 0){
    let arr1 = x.toString();
    let arr2 = arr1.split('');
    let arr3 = [];
    arr3.push(arr2[0]);
    arr2.shift();
    arr2.reverse();
    arr2.unshift(arr3[0]);
    arr2.join();
    let res = arr2.toString().replace(/,/g, '');
    return res < -2147483648 ? 0 : res;
    }
    return 0;
};