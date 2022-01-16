let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = [];

for (let key in person) {
  nestedPerson.push([key, person[key]]);
}

// OR

nestedPerson = Object.entries(person);
console.log(nestedPerson);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]