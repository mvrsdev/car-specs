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
  transmission: {
    type: 'AT', // AT = Automatic Transmission | MT = Manual Transmission
    cvt: false, // Continuously Variable Transmission or not
    gears: {
      first: 3.917,
      second: 2.429,
      third: 1.436,
      fourth: 1.021,
      fifth: 0.867,
      sixth: 0.702,
      reverse: 3.507,
    }, // List of gears and it's torque transmition ratio
  },
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
  performance: {},
};
