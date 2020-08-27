// practice
console.log('Original Way');

var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];
var goOutside = [];

for (let i = 0; i < weather.length; i++) {
  if (weather[i] > 70) {
    goOutside.push(weather[i]);
  }
}

console.log(goOutside);

// filter method for the same thing
console.log('\nFilter way 1');

var niceWeather = (temp) => {
  return temp > 70;
};

var goOutside = weather.filter(niceWeather);

console.log(goOutside);

// another way
console.log('\nFilter way 2');

var goOutside = weather.filter(function (temp) {
  return temp > 70;
});
console.log(goOutside);

// filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callback test are simply skipped, and are not included in the new array.
// filter() does not mutate the array on which it is called.
console.log('\nSunny Days');

var forecast = [
  { day: 'Monday', sun: true },
  { day: 'Tuesday', sun: false },
  { day: 'Wednesday', sun: false },
  { day: 'Thursday', sun: true },
  { day: 'Friday', sun: false },
  { day: 'Saturday', sun: true },
  { day: 'Sunday', sun: false },
];

var sunnyDays = [];
// remove the == false otherwise it'll show sunny days
for (var i = 0; i < forecast.length; i++) {
  if (forecast[i].sun === false) {
    sunnyDays.push(forecast[i]);
  }
}

// console.log(sunnyDays[0].day, sunnyDays[1].day, sunnyDays[2].day);

for (i = 0; i < sunnyDays.length; i++) {
  console.log(sunnyDays[i].day);
}

//filter method
console.log('\nNot Sunny Days Filter');

var notSunnyDays = forecast.filter(function (weather) {
  return !weather.sun;
});
//

// console.log(notSunnydays);

for (i = 0; i < notSunnyDays.length; i++) {
  console.log(notSunnyDays[i].day);
}
