let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengths = arr => {
  return arr.reduce((filteredArr, str) => {
    if (str.length % 2 === 1) {
      filteredArr.push(str.length);
    }
    return filteredArr;
  }, []);
};
console.log(oddLengths(arr)); // => [1, 5, 3]