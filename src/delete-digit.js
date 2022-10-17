const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {

  let str = n.toString();
  let arr = str.split('');
  arr.sort((a, b) => a-b);
  let min = String(arr[0]);
  return Number(str.slice(0, str.indexOf(min)) + str.slice(str.indexOf(min)+1));

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
