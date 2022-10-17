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
function repeater( str, options ) {
  let total = '';
  let sub = '';

  if(!options.repeatTimes) options.repeatTimes = 1;
  if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if(!options.separator) options.separator = '+';
  if(!options.additionSeparator) options.additionSeparator = '|';

  if(options.addition===false) options.addition = 'false';
  if(str===false) str = 'false';
  if(str===null) str = 'null'
  //const addition = options.addition + '';
 // const Str = str + '';
  if(options.additionRepeatTimes && options.addition){
    while (options.additionRepeatTimes) {
      sub += options.addition;
      options.additionRepeatTimes--;
      if(options.additionRepeatTimes > 0) sub+=options.additionSeparator;
    }
  }
  if(str && options.repeatTimes){
    while (options.repeatTimes){
      total += str + sub;
      options.repeatTimes--;
      if(options.repeatTimes > 0) total += options.separator;
    }
  }

  return total;
  //if(!options.addition)
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
