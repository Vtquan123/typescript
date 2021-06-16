# Section 3 - Type annotations in Action
- __Type annotation__: code we add to tell Typescript what type of value a variable will refer to.
- __Type inference__: Typescript tries to automatically figure out what type of value a variable refers to.
- When using __Type annotations__:
  + When we declare a variable on one line then initialize it later.
  + When we want a variable to have a type that can't be inferred.
  + When a function returns the 'any' type and we need to clarify the value.
- __any__:
  + A type, just as 'string' or 'boolean' are
  + Means Ts has no idea what this is - can't check for correct property references
  + Avoid variables with 'any' at all cost.