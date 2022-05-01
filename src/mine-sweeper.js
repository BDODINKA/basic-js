const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixNew = [];

  for (let row = 0; row < matrix.length; row++){
    matrixNew.push([]);
    const mRow = matrix[row]
    const mRowPlus = matrix[row + 1]
    const mRowMinus = matrix[row - 1]

    for (let column = 0 ; column < mRow.length; column++){
      let bomb = 0;

      if (mRow[column - 1] === true){
        bomb++;
      }
      if (mRow[column + 1] === true) {
        bomb++;
      }
      if (mRowMinus){
        if (mRowMinus[column - 1] === true){
          bomb++;
        }
        if (mRowMinus[column] === true){
          bomb++;
        }
        if (mRowMinus[column + 1] === true) {
          bomb++;
        }
      }
      if (mRowPlus){
        if (mRowPlus[column - 1] === true) {
          bomb++;
        }
        if (mRowPlus[column] === true){
          bomb++;
        }
        if (mRowPlus[column + 1] === true) {
          bomb++;
        }
      }



      matrixNew[row][column] = bomb;
    }
  }

  return matrixNew;
}



module.exports = {
  minesweeper
};
