/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let numRows = rowIndex + 1;
   var res = [];
     var tempArray = [1];
      res.push(tempArray);
     if(rowIndex === 0) {
       return res[0];
    } else {
    for(let i=1; i<numRows; i++){
        let row = [1];
        for(let j=1; j<i; j++){
            row.push(res[i-1][j-1] + res[i-1][j]);
        }
        row.push(1);
        res.push(row);

        }
        return res[rowIndex];
    }
};