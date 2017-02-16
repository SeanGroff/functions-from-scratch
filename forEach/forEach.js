module.exports = Array.prototype.forEach = function(cb) {
  for (let i = 0, arrLen = this.length; i < arrLen; i++) {
    cb(this[i]);
  }
  return undefined;
}
