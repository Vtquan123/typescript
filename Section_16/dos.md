- **declare**: is useful for telling the typescript compiler that a **declaration** is defined somewhere else (somewhere written in an external javascript file or part of the runtime environment).

  - For example, lets imagine that we have a library called myLibrary that doesn’t have a TypeScript declaration file and have a namespace called myLibrary in the global namespace. If you want to use that library in your TypeScript code, you can use the following code:

    `declare var myLibrary;`

  - The type that the TypeScript runtime will give to myLibrary variable is the any type. The problem here is that you won’t have Intellisense for that variable in design time but you will be able to use the library in your code. Another option to have the same behavior without using the declare keyword is just using a variable with the any type:

    `var myLibrary: any;`

  - Both of the code examples will result in the same JavaScript output but the declare example is more readable and expresses an ambient declaration.

- Let's say we have a variable called foo declared somewhere else. When we then try to reference the variable the typescript compiler will throw an error:

  `foo = 'random'; // Error: 'foo' is not defined`

- We can fix this problem using the declare keyword:

  ```ts
    declare var foo: string;
    foo = 'random'; // no error anymore
    This has the following consequences:
  ```

- When `foo` actually isn't declared anywhere else, and we try to use the variable a runtime error might occur. So only use the declare keyword when you know the variable is available at this point.
- Because we know the types, we (potentially) get access to our IDE Intellisense.
- Because we know the types, the typescript compiler can check the types at compile time, and can warn us if we are using the wrong types in certain scenarios.
