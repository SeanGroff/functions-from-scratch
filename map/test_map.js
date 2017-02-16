const cars = require('../mock/data_cars');
const map = require('./map')

const carModels = cars.map(car => car.model);
console.log(carModels);
