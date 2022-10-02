const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

/*
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
*/

function PromiseAll(array) {debugger;
  return new Promise((resolve, reject) => {
    let unresolvedCount = array.length;
    const resolvedArr = [];

    if (!unresolvedCount) return resolve(array);

    array.forEach(async (promise, index) => {
      try {
        let result = await promise;
        resolvedArr[index] = result;
        unresolvedCount--;
        if (!unresolvedCount) return resolve(resolvedArr);
      } catch (e) {
        reject(e);
      }
    });
  });
}

console.log("-------------OUTPUT-------------")
PromiseAll([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});