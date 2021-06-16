// Types annotations
let apples = 5
let banana = apples
let speed: string = 'fast'
let hasName: boolean = true

// Built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue',]
let anyArr: any[] = [1, 2, 'string', { name: 'Quan' }]

// Class
class Car {

}
let car: Car = new Car()
let car_1: Car = 'string'

// Object literal
let point: { x: number; y: number} = {
  x: 10,
  y: 20,
}

// Function
const logNumber: (i: number) => void = (i:number) => {
  console.log(i)
}

// When to use annotation
// 1) Function that returns the 'any' type
const json = '{"x":10,"y":20}'
const coordinates: { x: number; y: number} = JSON.parse(json)
console.log(coordinates) //{"x":10,"y":20}

// 2) When declaring a variable on one line and initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean

for (let i = 0; i < words.length; i++){
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3) Variables whose type cannot be inferred correctly
let number = [-10, -1, -12]
let numberAboveZero: number | boolean = false
for (let i = 0; i < number.length; i++){
  if (number[i] > 0) {
    numberAboveZero = number[i]
  }
}
