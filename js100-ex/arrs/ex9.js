let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

const contains = (target, destinations) => {
  for (let i = 0; i < destinations.length; i += 1) {
    if (destinations[i] === target) return true;
  }
  
  return false;
};

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false
