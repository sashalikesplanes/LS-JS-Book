let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // hi, as object is passed by references and mutatted by bar
console.log(qux); // 'hello' as primitive is passed by value and only the local
// variable argument2 is modified by bar