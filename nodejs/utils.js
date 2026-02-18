const generateRandom = () => Math.floor(Math.random() * 100) - 1
const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;


module.exports = { generateRandom, celsiusToFahrenheit }