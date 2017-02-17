module.exports = Array.zip = function (arrLeft, arrRight, combinerFunction) {
  const combined = [];
  for (let i = 0, arrLen = Math.min(arrLeft.length, arrRight.length); i < arrLen; i++) {
    combined.push(combinerFunction(arrLeft[i], arrRight[i]));
  }
  return combined;
}
