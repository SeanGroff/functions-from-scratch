const forEach2 = require('../forEach/forEach');

module.exports = Array.prototype.filter2 = function(cb) {
  const newArray = [];
  this.forEach2(item => cb(item) ? newArray.push(item) : null)  
  return newArray;
} 