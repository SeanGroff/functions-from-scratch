const cars = require('../mock/data_cars');
const map2 = require('./map')

const carModels = cars.map2(car => car.model);
console.log(carModels);