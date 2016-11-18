const cars = require('../mock/data_cars');
const filter2 = require('./filter');
const map2 = require('../map/map');

const silverModels = cars.filter2(car => {
  return car.color === 'Silver';
}).map2(car => car.model);

console.log(silverModels);