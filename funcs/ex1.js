let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // => 1
// Line 3 does not affect the bar on line 1 as it defines a new local variable