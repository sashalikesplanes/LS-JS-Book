let scores = [96, 47, 113, 89, 100, 102, 100];

const aboveHundred = scores.reduce((count, value) => {
  if (value >= 100) count += 1;
  return count;
}, 0);
console.log(aboveHundred);