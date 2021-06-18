// Section 4: Annotations with function and objects
const add = (a: number, b: number): number => {
    return a + b
}
  
function divide(a: number, b: number): number {
  return a/b
}

const multiply = function (a: number, b: number): number {
  return a*b
}

// Throwing an error => never actually reach to the end of the function => put "never" type to the function
const logger = (message: string): never => {
  console.log(message)
  throw new Error(message)
}

// Destructuring
const forecast = {
  date: new Date(),
  weather: 'sunny',
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

//ES6
const logWeather1 = ({ date, weather }:{date: number, weather: string}) => {
  console.log(date)
  console.log(weather)
}
