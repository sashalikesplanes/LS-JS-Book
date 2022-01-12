let add = (a, b) => a + b;
let getNum = (text) => {
  let input = prompt(text);
  return Number(input);
}

let num1 = getNum('enter first number: ');
let num2 = getNum('enter second number: ');
console.log(add(num1, num2));