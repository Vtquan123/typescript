# Section 7 - The All-Important Interface
- __Interface__: Creates a new type, describing the property names and value types of an object.
- General strategy tor reusable code in typescript:
  + Create functions that accept argument that are typed with interfaces.
  + Objects/classes can decided to _implement_ a given interface to work with a function.
  => Use interface as an checking gate to get access of object/classes which want to work with function.