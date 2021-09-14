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
var levelOrder = function(root) {
    var resultArr = [];
    var orderTraversalfunc = (root, level) => {
        if(!root){
            return;
        }
        if(resultArr[level]){
            resultArr[level].push(root.val);
        } else{
            resultArr[level] = [root.val];
        }
        orderTraversalfunc(root.left, level+1);
        orderTraversalfunc(root.right, level+1);
    };
    orderTraversalfunc(root, 0);
    
    return resultArr;
};