const str = 'launch school tech & talk';

let outStr = str[0].toUpperCase();

for (let i = 1; i < str.length; i += 1) {
  if (str[i - 1] === ' ') outStr += str[i].toUpperCase();
  else outStr += str[i];
}

console.log(outStr);