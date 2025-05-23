/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [];
     var tempArray = [1];
      res.push(tempArray);
      if(numRows === 0){
        return [];
      } else if(numRows === 1) {
       return res;
    } else {
    for(let i=1; i<numRows; i++){
        let row = [1];
        for(let j=1; j<i; j++){
            row.push(res[i-1][j-1] + res[i-1][j]);
        }
        row.push(1);
        res.push(row);

        }
        return res;
    }
};