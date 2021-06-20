// Classes
class Vehicle {
  // color: string
  constructor(public color: string) {
    // shorten to define a field
  }

  protected drive(): void {
    console.log('Chugga chugga')
  }
  honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color)
  }

  drive(): void {
    console.log('Driving')
  }
  startDrivingProcess(): void{
    this.drive()
  }
}

const vehicle = new Vehicle('orange')
vehicle.color
vehicle.honk()

const car = new Car(4,'red')
car.startDrivingProcess()
car.honk()
