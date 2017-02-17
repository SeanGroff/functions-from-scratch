const names = require('../mock/data_names');
const cars = require('../mock/data_cars');
const zip = require('./zip');

const zipped = zip(names, cars, (names, cars) => ({
  person: names,
  car: cars.make
}));

console.log(zipped);
