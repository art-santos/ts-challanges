function convertTemperature(celsius: number): number[] {
  const kelvin = celsius + 273.15
  const farenheit: number =  celsius * (9/5) + 32
  return [kelvin, farenheit]
};