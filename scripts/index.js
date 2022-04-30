import { getAllCars } from './apis.js';
import { getCommercialCarName } from './car-utils.js';

window.onload = async () => {
  const allCars = await getAllCars();
  loadAllCars(allCars);
};

const loadAllCars = carsList => {
  for (let i = 0; i < carsList.length; i++) {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');

    anchor.setAttribute('href', `car-details.html?id=${carsList[i].id}`);
    anchor.textContent = getCommercialCarName(carsList[i]);
    listItem.appendChild(anchor);
    document.getElementById('cars-list').appendChild(listItem);
  }
};
