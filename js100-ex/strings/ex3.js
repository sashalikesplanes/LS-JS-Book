const repeat = (numOfRepeats, inStr) => {
  let outStr = '';
  for (let i = 0; i < numOfRepeats; i += 1) {
    outStr += inStr;
  }
  console.log(outStr);
}

repeat(3, 'ha'); // 'hahaha'