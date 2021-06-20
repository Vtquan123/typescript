# Section 6 - Tuples in Typescript
- __Tuple__: Array-like structure where element represent some property of a record.
- Tuple has a fixed order of its element.
- Tuple is not to use to represent some meaningful data 'cause it's hard to read
```ts
// carSpec is not meaningful for developer
  const carSpec: [number, number] = [400,3345]

  // carStats is very meaningful for developer to understand car's properties
  const carStat = {
    horsePower: 400,
    weight: 3345
  }
```