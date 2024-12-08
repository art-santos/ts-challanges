function convertTemperature(celsius: number): number[] {
  const kelvin = celsius + 273.15
  const farenheit =  celsius * (9/5) + 32
  return [kelvin, farenheit]
};


const convert = convertTemperature(36.50)


console.log("🚀 ~ convert:", convert)


