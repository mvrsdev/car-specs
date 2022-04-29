const fordFocus = {
  brand: 'Ford',
  model: 'Focus',
  version: 'SE Plus',
  year: 2015,
  bodyType: 'Hatchback',
  availableColors: ['Green', 'Red', 'Silver', 'Black', 'Grey', 'Blue'],
  currentColor: 'Grey',
  engine: {
    maxPower: 178, // In CV
    maxPowerAtRpm: 6500, // Maximum power target RPM
    maxTorque: 22.5, // Kgfm
    maxToqueAtRpm: 4500, // Maximum torque target RPM
    cylinderCount: 4, // Total number of cylinders of the engine
    cylinderValveCount: 4, // Number of valves to each cylinder
    cylinderTotalCapacity: 1999, // Total cylinder capacity (in cm3)
    aspirationType: 'Natural', // Natural, Turbocharged, Supercharged
  },
  transmission: {
    type: 'AT', // AT = Automatic Transmission | MT = Manual Transmission
    cvt: false, // Continuously Variable Transmission or not
  },
  gears: [
    { index: 1, ratio: 3.917 },
    { index: 2, ratio: 2.429 },
    { index: 3, ratio: 1.436 },
    { index: 4, ratio: 1.021 },
    { index: 5, ratio: 0.867 },
    { index: 6, ratio: 0.702 },
    { index: 7, ratio: 3.507, reverse: true },
  ],
  imagePath: 'Image TBD',
  dimensions: {
    weight: 1375, // In Kilograms
    height: 1484, // In millimeters
    width: 1823, // In millimeters
    length: 4358, // In millimeters
    betweenAxles: 2648, // In millimeters
  },
  safety: {
    abs: true, // Antilock Braking System
    rpa: true, // Rear Park Assist
    rvc: false, // Rear Vision Camera
    acc: true, // Adaptive Cruise Control
    esc: true, // Electronic Stability Control
    aeb: false, // Autonomous Emergency Braking
    esp: true, // Electronic Stability Program
  },
  performance: {
    maxSpeed: 206, // In kilometers
    accelTo100: 9.2, // In seconds
    averageFuelConsumption: [
      {
        urban: {
          alcohol: 7.5,
          gas: 8.5,
        },
        highway: {
          alcohol: 9,
          gas: 16,
        },
      },
    ], // km/l
  },
};

const onix = {
  brand: 'Chevrolet',
  model: 'Onix',
  version: 'LT',
  year: 2018,
  bodyType: 'hatchback', // hatchback, sedan, suv, coupe, minivan, truck
  imagePath: 'img/onix-lt.jpeg',
  availableColors: [
    'Imperial blue',
    'Summit White',
    'Graphite',
    'Switchblade Silver',
    'Black Gold',
    'Carmin Red',
    'Burning Orange', // For 'Activ' version
  ],
  currentColor: 'Switchblade Silver',
  dimensions: {
    weight: 1067, // In Kilograms
    height: 1476, // In millimeters
    width: 1705, // In millimeters
    length: 3933, // In millimeters
    farFromGround: 120, // In millimeters
  },
  safety: {
    abs: true, // Antilock Braking System
    rpa: true, // Rear Park Assist
    rvc: false, // Rear Vision Camera
    acc: false, // Adaptive Cruise Control
    esc: false, // Electronic Stability Control
    aeb: false, // Autonomous Emergency Braking
    esp: false, // Electronic Stability Program
  },
  engine: {
    maxPower: 106, // In CV (Cavalo-Vapor)
    maxPowerAtRpm: 6000, // Maximum power target RPM
    maxTorque: 13.9, // Kgfm
    maxToqueAtRpm: 4800, // Maximum torque target RPM
    cylinderCount: 4, // Total number of cylinders of the engine
    cylinderValveCount: 2, // Number of valves to each cylinder
    cylinderTotalCapacity: 1389, // Total cylinder capacity (in cm3)
    aspirationType: 'natural', // Natural, Turbocharged, Supercharged
  },
  transmission: {
    type: 'AT', // AT = Automatic Transmission | MT = Manual Transmission
    cvt: false, // Continuously Variable Transmission or not
    gears: [
      { index: 1, ratio: 4.449 },
      { index: 2, ratio: 2.908 },
      { index: 3, ratio: 1.893 },
      { index: 4, ratio: 1.446 },
      { index: 5, ratio: 1 },
      { index: 6, ratio: 0.742 },
      { index: 7, ratio: 2.871, reverse: true },
    ], // List of gears and it's torque transmition ratio
  },
  performance: {
    maxSpeed: 171, // In kilometers
    accelTo100: 12, // In seconds
    averageFuelConsumption: {
      // Km per liters
      highway: {
        ethanol: 9.6,
        gas: 13.9,
      },
      urban: {
        ethanol: 7.9,
        gas: 11.7,
      },
    },
  },
};

function getComercialCarName(car) {
  const cylinderTotalCapacity = car.engine.cylinderTotalCapacity / 1000;
  return `${car.brand} ${car.model} ${car.version} ${
    car.year} ${cylinderTotalCapacity.toFixed(1)}`;
};
const carName = getComercialCarName(fordFocus);

function getTotalValvesCount(car) {
  return `${car.engine.cylinderCount * car.engine.cylinderValveCount}V`;
};
const carValveCount = getTotalValvesCount(fordFocus);

function getIndividualCylinderCapacity(car) {
  return `${car.engine.cylinderTotalCapacity / car.engine.cylinderCount}`;
};
const individualCylinderCapacity = getIndividualCylinderCapacity(fordFocus);

function getWeightPowerRatio(car) {
  const carWeightPowerRatio = car.dimensions.weight / car.engine.maxPower;
  return `${carWeightPowerRatio.toFixed(2)} kg/cv`;
}
const weightPowerRatio = getWeightPowerRatio(fordFocus);
