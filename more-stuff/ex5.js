function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// Takes in a string, returns a reversed array of word lengths