const mysteriousMath = (string) => string.replace(/[+\-*/]/g, "?");

console.log(mysteriousMath("4 + 3 - 5 = 2")); // -> '4 ? 3 ? 5 = 2'
console.log(mysteriousMath("(4 * 3 + 2) / 7 - 1 = 1")); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'
