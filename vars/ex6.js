const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO); // Outputs bar

// No error will be caused as we simply declare a new local cosnt on line 3 and
// we do not attempt to reassign a const
// Once the block scope is over we return back to the previous value of FOO