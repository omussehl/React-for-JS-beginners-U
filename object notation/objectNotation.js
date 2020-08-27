const { snow } = require('color-name');

// dot notation
var pizza = {};

pizza.toppings = 'cheese, pepperoni, olives, mushrooms';
pizza.cheese = 'mozzarella';
pizza.size = 'large';

console.log(pizza);

// name value pair
const person = {
  name: 'Omar',
  age: 24,
  tall: true,
};

console.log(person);

// bracket notation

var apartment = {};

apartment['waterView'] = true;
apartment['squareFoot'] = 900;
apartment['city'] = 'Philadelphia';
apartment['transportation'] = 'car';

console.log(apartment);
console.log(`Apartment: ${apartment.waterView}`);

// Dot vs Bracket - dot notation is easier and faster

var snowman = {
  isSnow: true,
  color: 'white',
  madeOfSnowballs: 3,
  'first name': 'Frosty',
};

snowman.isSnow = 'yes';
snowman.madeOfSnowballs = 8;
snowman['first name'] = 'Jack Frost';

console.log(
  snowman,
  snowman.isSnow,
  snowman.color,
  snowman['madeOfSnowballs'],
  snowman['first name']
);

var home = {};

home['square footage'] = 1950;
home['year built'] = 1999;
home['exterior material'] = 'brick';
home['ready to move in'] = true;

home.bedrooms = 3;
home.bathrooms = 1.5;
home.backyard = true;
home.interior = 'plaster';

console.log(home);
