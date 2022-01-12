let rlSync = require('readline-sync');

let num1 = Number(rlSync.question('Enter first num: '));
let num2 = Number(rlSync.question('Enter second num: '));
let sum = num1 + num2;

console.log(`The num: ${num1} and num: ${num2} sum to ${sum}.`);