const userCar = {
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
    cylinderValveCount: 2, // Number of valves to each cylinder
    cylinderTotalCapacity: 1999, // Total cylinder capacity (in cm3)
    aspirationType: 'Natural', // Natural, Turbocharged, Supercharged
  },
  transmission: {},
  imagePath: 'Image TBD',
  dimensions: {
    weight: 1375, // In Kilograms
    height: 1484, // In millimeters
    width: 1823, // In millimeters
    length: 4358, // In millimeters
    betweenAxles: 2648, // In millimeters
  },
  safety: {},
  performance: {},
};
