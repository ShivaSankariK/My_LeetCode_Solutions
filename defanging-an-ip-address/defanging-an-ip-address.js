/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var str = address.split('.').join("[.]");
    return str;
};