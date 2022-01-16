let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = {};

nestedArray.forEach(pair => person[pair[0]] = pair[1]);

// OR

person = Object.fromEntries(nestedArray);

console.log(person);