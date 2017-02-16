const printer = require('../mock/printer')

module.exports = Array.prototype.map = function(projectionFunction) {
  const newArray = [];
  this.forEach(item => newArray.push(projectionFunction(item)));
  return newArray;
}
