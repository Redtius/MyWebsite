## Variables :
JS is a dynamically typed programming language, it determines the type itself, you could give your variable a number then give them a string.

Here's the types of variables:
```Javascript
// 1. Undefined
let undefinedVariable; // Variable is declared but not assigned a value

// 2. Null
let nullVariable = null; // Variable is assigned a null value

// 3. Boolean
let booleanVariable = true; // Variable is assigned a boolean value

// 4. Number
let numberVariable = 10; // Variable is assigned a number value

// 5. BigInt
let bigIntVariable = 9007199254740991n; // Variable is assigned a BigInt value

// 6. String
let stringVariable = "Hello, world!"; // Variable is assigned a string value

// 7. Symbol
let symbolVariable = Symbol("unique"); // Variable is assigned a symbol value

// 8. Object
let objectVariable = { name: "John", age: 25 }; // Variable is assigned an object value

// Additional Example: Array (derived from Object)
let arrayVariable = [1, 2, 3, 4]; // Variable is assigned an array value

// Additional Example: Function (derived from Object)
let functionVariable = function() { // Variable is assigned a function value
  console.log("Hello, world!");
};
```

There's two keywords used to declare a variable **let** and **var**.

- `let` is used for Local Variables (Local to it's Scope).

- `var` is used for global Variables

It's generally recommended to use `let` in most cases, only use `var` in few cases if you want a global variable.

## Constants

- Constants are used to store data, and keep it unable to change once it's stored the first time.

- They're generally recommended to use as they help you prevent bugs, and sudden changes!


### Use `const` when you can, and use `let` when you have to !!!

## Cast

the cast is the same as in C and C++.

```Javascript
let num='3' // string

let num1=Number(num)

console.log(num1);
```