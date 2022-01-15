let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

// first loop never runs as counter is not greater than zero
// second loop runs once before the condition is evaluated 