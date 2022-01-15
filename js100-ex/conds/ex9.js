let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

// outputs $3.99
// as !sale if falsy hence the else condition is run and
// admissionPrice = 3.99