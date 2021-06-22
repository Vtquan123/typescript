# Section 10 - More on Design Patterns
- __nodemon__: allow us to rerun Node any time a file changes inside of our project so it's going to be responsible for actually  executing our code once it has been complied.
- __concurrently__: Help run multiple scripts at the same time. Ex: help us to do both command build and run in one command.
- __Type guard__: a type guard is going to be check on the type of variable, once we run a type guard we are essentially going to clarify that type of value we work with.
  + _typeof_: number, string, boolean, symbol
  + _instanceof_: Every other value is created with a constructor function.
- Differences in using _Interface_ and _Abstract_:
  + __Interface__: 
    + Sets up a contract between different classes.
    + Use when we have very different objects that we want to work together.
    + Promotes loose coupling.
  + __Abstract__:
    + Sets up a contract between different classes.
    + Use when we are trying to build up a definition of an object.
    + Strongly couples classes together.