let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

const allMatches = (words, pattern) => words.filter(word => pattern.test(word));

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']