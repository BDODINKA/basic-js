const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const strStr = String(str);
  let addSep = "|";
  let sep = "+";
  let add = "";

    if (options.additionSeparator === 0 || options.additionSeparator !== undefined){
    addSep = options.additionSeparator;
    }
    if (options.separator === 0 || options.separator !== undefined){
    sep = options.separator;
    }
    if (options.addition === 0 || options.addition !== undefined){
    add = String(options.addition);
    }


  const repeat = strStr + (add + addSep).repeat(options.additionRepeatTimes - 1) + add;
  const end = (repeat + sep).repeat(options.repeatTimes - 1) + repeat;

  return end;
}
module.exports = {
  repeater
};
