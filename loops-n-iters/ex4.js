for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// Error produced as the increment condition is missing from the declaration
// of the for loop

// CORRECTION: no error produced, for loop doesnt need to have an increment statement
// all componenets of the for loop are optional