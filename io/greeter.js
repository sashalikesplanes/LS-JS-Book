let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name? ");
let famName = rlSync.question("What's your family name? ");
console.log(`Hello, ${firstName} ${famName}!`);