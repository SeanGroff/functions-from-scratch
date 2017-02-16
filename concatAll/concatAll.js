/**
 *  RxJS
 *concatAll() expects each item in the array to be another array
 */
module.exports = Array.prototype.concatAll = function () {
  const flattenedArray = [];
  this.forEach(subArray =>
    subArray.forEach(item =>
      flattenedArray.push(item)));
  return flattenedArray;
}
