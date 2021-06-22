# Decorators
- Functions that can be used to modify/change/anything different properties/methods in the class in the __run-time__
- Not the same as Javascript decorator
- Used inside/on classes only
- Understanding the order in which decorators are ran are the key to understand them
- Experimental

- __Decorators__ on a property, method, accessor:
  + First argument is the __prototype__ of the object
  + Second argument is the key of the property/method/accessor on the object
  + Third argument is the __Property descriptor__: an object that has  some configuration options around a property defined on an object. It includes the following properties:
    + __writable__: Whether or not the property can be changed
    + __enumerable__: Whether or not this property get looped over by a 'for...in'
    + __value__: Current value
    + __configurable__: Property definition can be changed and property can be deleted
  + Decorators are applied when the code for this class is ran (__not when an instance is created__). It's got executed only one single time when the class is __first defined__. So decorator is __never going to be able to access__ any instance properties on a instance.

- 5 types of decorators:
  + Class decorator
  + Method decorator
  + Property decorator
  + Accessor decorator
  + Parameter decorator

