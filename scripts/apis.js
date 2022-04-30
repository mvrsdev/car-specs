export const getAllCars = async () => {
  const response = await fetch('../assets/json/cars.json');
  return response.ok ? response.json() : undefined;
};
