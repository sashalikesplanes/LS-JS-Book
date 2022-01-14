let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

const allMatches = (arr, pattern) => arr.filter(elm => pattern.test(elm));

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']