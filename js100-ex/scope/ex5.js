function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
// 1
// 2

// CORRECTION
// Reference error as a is reinitialized within the scope of the if statement
// hence cannot be used in line 5 which is before the assignemenet