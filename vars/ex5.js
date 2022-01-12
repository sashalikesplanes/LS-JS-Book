let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // Will output bar

// as on line 3 we declare a new foo on the block scope
// once the block is over we go back to the old value of foo