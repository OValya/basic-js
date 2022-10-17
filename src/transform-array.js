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
function transform( arr ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const trans = [];
  if(Array.isArray(arr)){
    arr.forEach((item, index, array) => {
      switch (item){
        case '--double-next':
          break;
        case '--double-prev':
          break;
        case '--discard-next':
          break;
        case '--discard-prev':
          break;
        default: trans.push(item);
      }
    })
  } else throw new Error(`'arr' parameter must be an instance of the Array!`);
  return trans;
}

module.exports = {
  transform
};
