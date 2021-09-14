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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const average = (arr) => arr.reduce((acc, el) => acc + el, 0) / arr.length;
  const valuesAtDepth = [];
  
  const recursion = function (root, level) {
    if (!root) {
      return;
    }

    if (!valuesAtDepth[level]) {
      valuesAtDepth[level] = [];
    }
    valuesAtDepth[level].push(root.val);
    recursion(root.left, level + 1);
    recursion(root.right, level + 1);
  };

  recursion(root, 0);

  return valuesAtDepth.map(average);
};