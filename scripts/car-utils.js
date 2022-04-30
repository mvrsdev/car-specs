export function getCommercialCarName(car) {
  const cylinderTotalCapacity = car.engine.cylinderTotalCapacity / 1000;
  return `${car.brand} ${car.model} ${car.version} ${
    car.year
  } ${cylinderTotalCapacity.toFixed(1)}`;
}

export function getTotalValvesCount(car) {
  return car.engine.cylinderCount * car.engine.cylinderValveCount;
}

export function getIndividualCylinderCapacity(car) {
  return car.engine.cylinderTotalCapacity / car.engine.cylinderCount;
}

export function getWeightPowerRatio(car) {
  return car.dimensions.weight / car.engine.maxPower;
}

export function getGearMaxTorque(car, index) {
  return car.engine.maxTorque * car.transmission.gears[index].ratio;
}
