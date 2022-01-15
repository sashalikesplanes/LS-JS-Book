const isBlank = str => !!str.trim().length;

console.log(isBlank(''));
console.log(isBlank('  '));
console.log(isBlank(' fds fsd  '));
