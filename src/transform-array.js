const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let outArray = [];


  for (let i = 0; i < arr.length; i++){
    if (arr[i] === '--discard-next'){
     arr.splice(i+1,1)
    }
    else if(arr[i] === '--discard-prev'){
      outArray.splice(i-1,1)
    }
    else if(arr[i] === '--double-next'){
      outArray.push(arr[i+1])
    }
    else if(arr[i] === '--double-prev'){
        outArray.push(arr[i-1])
    }
    else {
      outArray.push(arr[i])
    }

  }
  outArray.includes(undefined)?outArray.splice(outArray.indexOf(undefined),1): outArray;
  outArray.includes('--discard-next')?outArray.splice(outArray.indexOf('--discard-next'),1): outArray;
  outArray.includes('--discard-prev')?outArray.splice(outArray.indexOf('--discard-prev'),1): outArray;
  outArray.includes('--double-next')?outArray.splice(outArray.indexOf('--double-next'),1): outArray;
  outArray.includes('--double-prev')?outArray.splice(outArray.indexOf('--double-prev'),1): outArray;
  return outArray
}

module.exports = {
  transform
};
