// Typed Arrays
const carMakers: string[] = ['for', 'toyota', 'chevy']
const date: Date[] = [new Date(), new Date()]

// Array contain arrays
const carsByMake: string[][] = [
  ['150'],
  ['corolla'],
  ['camaro']
]

// Array contains objects
const arrayContainObject: ({
  name: string;
  age?: undefined
} | {
  name?: undefined;
  age: number
})[] = [
  { name: 'Quan' },
  {age: 24}
  ]

  // Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
// carMakers.push(5)

// Help with map
carMakers.map((car: string) => {
  return car
})

// Multiple types
const importantDates: (Date | string | number)[] = [new Date(), 'hello', 12]
importantDates.push(20)