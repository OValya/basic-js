const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainLenght: 0,
  chain: [],
  res: '',

  getLength() {
    return this.chain.length;
  },
  addLink( value ) {
    this.chain.push(value);
    return this;
  },
  removeLink( position ) {
    //todo сделать проверку на целое число
    try {
      this.chain.splice(position, 1);
      return this;

    } catch (error) {

    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;

  },
  finishChain() {
    this.chain.forEach(item => this.res += `( ${item} )~~`);
    if(this.res[this.res.length-1] === '~') this.res = this.res.slice(0, this.res.length-2);
    return this.res;
  }
};

module.exports = {
  chainMaker
};
