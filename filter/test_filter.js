const cars = require('../mock/data_cars');
const filter2 = require('./filter');

const silverCars = cars.filter2(car => {
  return car.color === 'Silver';
});

console.log(silverCars);