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
function encodeLine( str) {
  let count = 1;
  let char;
  let codeStr = '';
  for(let i = 0; i< str.length; i++){
    char = str[i];
    if(char == str[i+1]) {
      count++;
    } else if(count == 1){
      codeStr += char;
      count = 1;
    } else {
      codeStr += count + char;
      count = 1;
    }
  }
  return codeStr;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
