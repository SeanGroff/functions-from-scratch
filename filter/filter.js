module.exports = Array.prototype.filter = function(predicate) {
  const newArray = [];
  this.forEach(item => predicate(item) ? newArray.push(item) : null)  
  return newArray;
}
