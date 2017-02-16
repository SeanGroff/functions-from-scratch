const cars = require('../mock/data_cars');
const filter = require('./filter');

const silverCars = cars.filter(car => car.color === 'Silver');

console.log(silverCars);
