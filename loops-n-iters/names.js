let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let i = 0;

while (i < names.length) {
  upperNames.push(names[i].toUpperCase());
  i += 1;
}

console.log(upperNames);

upperNames = [];
for (let j = 0; j < names.length; j += 1) {
  if (names[j] === 'Naveed') continue;
  upperNames.push(names[j].toUpperCase());
}
console.log(upperNames);