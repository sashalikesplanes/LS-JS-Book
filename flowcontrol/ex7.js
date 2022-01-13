const upperString = string => {
  if (string.length > 10) {
    return string.toUpperCase();
  }
  return string;
}

console.log(upperString('sasha'));
console.log(upperString('fdalghfdDFkjlFShdkslzhfnasjk'));
