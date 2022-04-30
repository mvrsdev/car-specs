import { getAllCars } from './apis.js';

let currentCar;

window.onload = async () => {
  currentCar = await getCarById(getCarId(1));

  document.getElementById('car-info').textContent = JSON.stringify(currentCar);
  document.getElementById('car-image').setAttribute('src', currentCar.imagePath);
};

const getCarId = () => {
  return parseInt(new URL(window.location).searchParams.get('id'), 10);
}

const getCarById = async (carId) => {
  return (await getAllCars()).find((car) => car.id === carId);
}
