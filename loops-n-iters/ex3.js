let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// This causes an infinite loop as the while condition is an assignement
// and assignements will return the value, hence condition always returns 1
// which is truthy
// And as counter is always set to 1 and incremented to 2 it will never be greater than 2