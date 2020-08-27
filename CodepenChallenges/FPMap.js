// Map function use example 1:

var forecast = [
  { day: 'Monday', sun: true, humidity: 10 },
  { day: 'Tuesday', sun: false, humidity: 100 },
  { day: 'Wednesday', sun: false, humidity: 100 },
  { day: 'Thursday', sun: true, humidity: 25 },
  { day: 'Friday', sun: false, humidity: 100 },
  { day: 'Saturday', sun: true, humidity: 15 },
  { day: 'Sunday', sun: false, humidity: 100 },
];

var humid = [];

// for (var i = 0; i < forecast.length; i++) {
//   humid.push(forecast[i].humidity);
// }

var humid = forecast.map(function (wetness) {
  return wetness.humidity;
});

console.log(humid);

// Map function use example 2:

var numbers = [5, 10, 15, 20, 25];

var triples = numbers.map(function (num) {
  return num * 3;
});

console.log(triples);

// Map Lab

var weatherTemp = [
  { day: 'Monday', sun: true, temp: 10 },
  { day: 'Tuesday', sun: false, temp: 100 },
  { day: 'Wednesday', sun: false, temp: 100 },
  { day: 'Thursday', sun: true, temp: 25 },
  { day: 'Friday', sun: false, temp: 100 },
  { day: 'Saturday', sun: true, temp: 15 },
  { day: 'Sunday', sun: false, temp: 100 },
];

var tempIncrease = weatherTemp.map(function (increase) {
  return increase.temp * [1.6];
});

console.log(tempIncrease);

var tempDecrease = tempIncrease
  .map(function (decrease) {
    return decrease * 0.6;
  })
  .map(function (decrease) {
    return decrease + 1;
  });

console.log(tempDecrease);

// Greeting challenge

var greetings = ['hi', 'hello', 'sup', 'yo'];

var shout = greetings
  .map(function (upper) {
    return upper.toUpperCase() + '!';
  })
  .map(function (upper) {
    return upper + '?';
  });

var greetingLowercase = shout.map(function (lower) {
  return lower.toLowerCase();
});

var hiShout = shout.shift();

console.log(shout, greetingLowercase, hiShout);
