let rlSync = require('readline-sync');
let currentAge = rlSync.question('How old are you? ');
currentAge = parseInt(currentAge);

console.log(`You are ${currentAge} years old.`)
for (let i = 10; i <= 40; i += 10) {
  console.log(`In ${i} years, you will be ${currentAge + i} years old.`);
}
