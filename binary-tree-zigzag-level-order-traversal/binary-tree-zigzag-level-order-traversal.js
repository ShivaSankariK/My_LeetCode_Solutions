/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var resultArr = [];
    var traversalfunc = (root, level) => {
        if(!root){
            return;
        }
        if(resultArr[level]){
            resultArr[level].push(root.val);
        }
        else{
            resultArr[level] = [root.val];
        }
        
        traversalfunc(root.left, level+1);
        traversalfunc(root.right, level+1);
    };
    traversalfunc(root, 0);
    resultArr.map((arr, index) => {
        if(index % 2 !== 0){
            arr.reverse();
        }
    });
    return resultArr;
};