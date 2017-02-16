const cars = require('../mock/data_cars');
const filter = require('./filter');
const map = require('../map/map');

const silverModels = cars
  .filter(car => car.color === 'Silver')
  .map(car => car.model);

console.log(silverModels);
