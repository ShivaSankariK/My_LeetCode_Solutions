/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    var str = command.split("()").join("o");
    var str2 = str.split("(al)").join("al");
    return str2;
};