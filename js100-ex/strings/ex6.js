let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('!'));

const includesSasha = (str, char) => {
  const strLen = str.length;
  for (let i = 0; i < strLen; i += 1) {
    if (str[i] === char) return true;
  }
  return false;
}

console.log(includesSasha(byteSequence, 'x'));
console.log(includesSasha(byteSequence, '!'));