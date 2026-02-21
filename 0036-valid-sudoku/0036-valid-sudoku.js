/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = {};
    const columns = {};
    const boxes = {};

    for (let i = 0; i < 9; i++) {
        rows[i] = new Set();
        columns[i] = new Set();
        boxes[i] = new Set();
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];

            // Skip empty cells
            if (val === '.') {
                continue;
            }

            // Calculate the box ID (0-8)
            const boxId = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (rows[r].has(val) || columns[c].has(val) || boxes[boxId].has(val)) {
                return false;
            }

            rows[r].add(val);
            columns[c].add(val);
            boxes[boxId].add(val);
        }
    }

    return true;
};
