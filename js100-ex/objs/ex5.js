let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // { perfix: 'Pacific' }

ocean = {};
prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // { 'Indian': 'Pacific' }