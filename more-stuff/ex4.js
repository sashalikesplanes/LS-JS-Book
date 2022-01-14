const largestNumber = arr => {
  let currentLargest = -Infinity;
  for (let elm of arr) {
    if (Number.isInteger(elm) && elm > currentLargest) currentLargest = elm;
  }
  return currentLargest;
}
console.log(largestNumber([1, 6, null, 3, 2]));
console.log(largestNumber([-1, -6, -3, -2]));
console.log(largestNumber([2, 2]));
console.log(largestNumber([2, 'sasha', 2]));
console.log(Math.max([1, 6, null, 3, 2]));