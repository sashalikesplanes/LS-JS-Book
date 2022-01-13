const fib = n => {
  // Returns the nth number of the fibonacci sequence
  if (n < 2) return n;
  return fib(n - 1) + fib (n - 2);
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(4));
console.log(fib(6));
console.log(fib(7));
console.log(fib(9));