# Section 4 - Annotations with functions and objects
- Type inference __only works around the return value__ from a function:
  + Typescript will try to figure out what value or what type of value you are returning from a function.
  + Typescript will not try to figure out what type of value the arguments are

- When throwing an error, the function will technically not actually return anything. To indicate that, put on a __never__ type for the function, that means never going to actually reach the end of the function. Only use __never__ type when __surely__ throw an error.