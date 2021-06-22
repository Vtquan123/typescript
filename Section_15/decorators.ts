// Decorators
@classDecorator // When you might want to have some ability to look at a class
class Boat {
  // Around property
  @testDecorator
  color: string = 'red'
  
  // Accessor
  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }
  
  // Method
  // Change "experimentalDecorators": true/"emitDecoratorMetadata": true in tsconfig.json
  @logError('Something went wrong')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator speed2: string): void { // When you might want to have some idea of the different arguments that are coming into a function
    if (speed === 'fast') {
      console.log('swish')
    } else {
      console.log('nothing')
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////

// Class decorator
function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

// Parameter decorator
function parameterDecorator(target: any, key: string, index: number) { // index of the argument we are applying this decorator to
  console.log(key, index)
}


// Decorator around properties
function testDecorator(target: any, key: string) {
  console.log('Target', target)
  console.log('Key', key)
}
// The first argument is prototype so it doesn't include around properties, only method definitions
// We can only know the key of this around property, that's all


// Decorator factory
function logError(errorMess:string) { 
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value
    desc.value = function () {
      try {
        method()
      } catch (error) {
        console.log(errorMess)
      }
    }
  }
}

// new Boat().pilot()

