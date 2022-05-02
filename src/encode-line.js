const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine (str) {
  let res = "";
  for (let i = 0, count = 1; i < str.length; i++) {
    if (str[i] === str[i + 1] || str[i] === undefined) {
      count++;
    } else {

      if (count === 1){
        res+= `${""}${str[i]}`
      }else{
        res+=`${count}${str[i]}`
      }
      count = 1;
    }
  }
  return res;
}
module.exports = {
  encodeLine
};
