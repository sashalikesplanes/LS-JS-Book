const isNegZero = arg => {
  if (!Number.isInteger(arg)) return false;
  return (1 / arg === -Infinity);
}

console.log(isNegZero(-0));
console.log(isNegZero(0));
console.log(isNegZero(1));
console.log(isNegZero(-2));
console.log(isNegZero(-Infinity));
console.log(isNegZero(Infinity));
console.log(isNegZero('Sasha'));