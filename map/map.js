const forEach2 = require('../forEach/forEach');
const printer = require('../mock/printer')

module.exports = Array.prototype.map2 = function(cb) {
  const newArray = [];
  this.forEach2(item => newArray.push(cb(item)))
  return newArray;
}