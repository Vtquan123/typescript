// Nothing to do with generics
const add = (a: number, b: number): number => {
  return a + b;
};

class HoldNumber {
  data: number;
}

class HoldString {
  data: string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = "abc";

// With GENERICS
class HoldAnything<TypeOfData> {
  data: TypeOfData;

  add(a: TypeOfData): TypeOfData {
    return a;
  }
}

const num = new HoldAnything<number>();
num.data = 1234;
const str = new HoldAnything<string>();
str.data = "asdfasdf";

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "c"]);

// Type inference with generics
const arr = new ArrayOfAnything(["a", "b", "c"]);

// Function generics
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c"]);

// Generic constraints
class Houses {
  print(): void {
    console.log("There is some house");
  }
}
interface Printable {
  print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHouseOrCars([new Houses(), new Houses()]);

type Test = {
  [key: string]: number;
};

// With ".ts" file, just use <OptTest> to add Generic to arrow function
const testC = <OptTest>(prop: OptTest): void => {
  console.log(prop);
};

testC<Test>({ age: 20 });
