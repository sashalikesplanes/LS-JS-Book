function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); // 'Empty' to console

// As an empty array is falsy hence the else condition is triggered

// INCORRECT, objects cannot be falsy in JS