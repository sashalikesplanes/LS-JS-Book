let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengths = arr => {
  let lengthsArr = arr.map(elm => elm.length);
  return lengthsArr.filter(length => length % 2 === 1);
};
console.log(oddLengths(arr)); // => [1, 5, 3]