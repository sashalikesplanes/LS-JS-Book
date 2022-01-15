const extractRegion = locale => locale[3] + locale[4];
const extractLanguage = locale => locale[0] + locale[1];
const greet = locale => {

  let regionCode = extractRegion(locale); 
  let langCode = extractLanguage(locale);
  switch (langCode) {
    case 'en':
      switch (regionCode) {
        case 'US': return 'Hey!';
        case 'GB': return 'Hello!';
        case 'AU': return 'Howdy!';
        default: return 'Hi!';
      }
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
    default: return 'Hello Interntional';
  }
}

console.log(greet('en_US.UTF-8'));
console.log(greet('fr_FR.UTF-8'));
console.log(greet('en_GB.UTF-8'));
console.log(greet('en_FU.UTF-8'));