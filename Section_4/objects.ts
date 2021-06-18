import { Profiler } from 'inspector'

// Annotation around objects
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age
  }
}

// Destructuring
const { age, name }: { age: number; name: string } = profile
const { coords: { lat, lng } }: { coords: { lat: number; lng: number}} = profile