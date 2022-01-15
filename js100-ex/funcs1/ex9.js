const extractLanguage = locale => locale[0] + locale[1];

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

console.log(extractLanguage('ko_US.UTF-8'));