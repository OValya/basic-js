const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  const obj = {};
  //const arr = [];
  let prop;
  for( let elem of domains){
    const arr = elem.split('.');
    arr.reverse();
    prop = '';
    for(let iterator of arr){
      prop += '.'+iterator;
      obj[prop] = (obj[prop] === undefined)? 1 : obj[prop] + 1;
      }
    }
    return obj;
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  getDNSStats
};
