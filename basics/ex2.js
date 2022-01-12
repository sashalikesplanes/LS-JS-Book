let input = 4936;

const thousands = Math.floor(input / 1000);
input -= thousands * 1000;
const hundreds = Math.floor(input / 100);
input -= hundreds * 100;
const tens = Math.floor(input / 10);
input -= tens * 10;

console.log(`Thousands: ${thousands}, hundreds: ${hundreds}, tens: ${tens}, \
ones: ${input}`);


