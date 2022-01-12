const multiply = (a, b) => a * b;
const getNum = prompt => {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let num1 = getNum('Enter first num: ');
let num2 = getNum('Enter second num: ');
let product = multiply(num1, num2);

console.log(`${num1} * ${num2} = ${product}`);