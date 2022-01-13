let array = [3, 5, 7];

const sumOfSquares = array => {
  return array.reduce((accumulator, num) => accumulator + num ** 2, 0);
};


console.log(sumOfSquares(array)); // => 83