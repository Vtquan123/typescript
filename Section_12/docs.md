# Generics
- like a function arguments, but for types in class/function definitions
- Allow us to define the type of a property/argument/return value at a future point
- Used heavily when writing reusable code
- __Generic constraints__: is going to essentially tell Typescript that we promise that there will be a method available.
  ```ts
    interface Printable {
      print():void
    }

    function printHouseOrCars<T extends Printable>(arr:T[]):void {
      for (let i = 0; i < arr.length; i++) {
      arr[i].print()
   }
}
  ```