const evenOrOdd = a => {
  if (Number.isInteger(a)) {
    a % 2 === 0 ? console.log('even') : console.log('odd');
    return;
  }
  console.log('not an integer');
}

evenOrOdd(5);
evenOrOdd(4);
evenOrOdd(101);
evenOrOdd(101.564);
evenOrOdd('Sasha');
evenOrOdd('101');