/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
  if (!arr.length) throw "not a valid arr";
  
  let memo = {}; // [key(arr[index]), value(count)]
  for (let i = 0; i < arr.length; i ++) {
      let item = arr[i];
      if (!memo[item]) memo[item] = 0;
      memo[item]++;
  }
  
  // now the memo should be populated with each count
  const countArr = Object.entries(memo).map(([value, count]) => count);
  memo = {};
  for (item of countArr) {
      if (!memo[item]) memo[item] = true;
      else return false;
  }
  
  return true;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));