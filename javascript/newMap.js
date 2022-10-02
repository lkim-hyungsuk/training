/**
 * @callback callbackFn
 * @param {object} [thisArg]
 * @return {Array}
 */
 Array.prototype.myMap = function (callbackFn, thisArg) {
  debugger;
  if (typeof callbackFn !== "function") throw 'Not implemented!';

  const mapped = [];
  for (let i = 0; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      mapped[i] = callbackFn.call(thisArg, this[i], i, this/*this here is the array itself*/); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    }
  }
  return mapped;
};

var input = [
0,
2,
6,
NaN,
NaN,
NaN ]