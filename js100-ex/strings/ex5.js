let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

const stringCompare = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  return str1 === str2;
}

console.log(stringCompare(string1, string2));
console.log(stringCompare(string1, string3));