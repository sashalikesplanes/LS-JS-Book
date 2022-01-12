const askQuestion = question => {
  let rlSync = require('readline-sync');
  return rlSync.question(question);
}

let firstName = askQuestion("What's your first name? ");
let famName = askQuestion("What's your family name? ");
console.log(`Hello, ${firstName} ${famName}!`);