const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// { firstName: 'Jane', lastName: 'Doe' };
// objects are mutable so even the value of parameters of a const may be changed