Maths Operators in Javascript are almost the same as C and C++.

## Arithmetic Operators

```Javascript
let x = 10;
let y = 5;

// Addition
let addition = x + y; // Adds x and y: 10 + 5 = 15

// Subtraction
let subtraction = x - y; // Subtracts y from x: 10 - 5 = 5

// Multiplication
let multiplication = x * y; // Multiplies x and y: 10 * 5 = 50

// Division
let division = x / y; // Divides x by y: 10 / 5 = 2

// Modulus (Remainder)
let modulus = x % y; // Finds the remainder of x divided by y: 10 % 5 = 0

// Exponentiation
let exponentiation = x ** y; // Raises x to the power of y: 10^5 = 100000

// Increment
let increment = ++x; // Increments the value of x by 1: x becomes 11

// Decrement
let decrement = --y; // Decrements the value of y by 1: y becomes 4

```

## Comparaison Operators

```Javascript
let x = 10;
let y = 5;

// Equality
let equality = x == y; // Checks if x is equal to y: false

// Inequality
let inequality = x != y; // Checks if x is not equal to y: true

// Strict Equality
let strictEquality = x === y; // Checks if x is strictly equal to y (same value and same type): false

// Strict Inequality
let strictInequality = x !== y; // Checks if x is strictly not equal to y (different value or different type): true

// Greater Than
let greaterThan = x > y; // Checks if x is greater than y: true

// Less Than
let lessThan = x < y; // Checks if x is less than y: false

// Greater Than or Equal To
let greaterThanOrEqual = x >= y; // Checks if x is greater than or equal to y: true

// Less Than or Equal To
let lessThanOrEqual = x <= y; // Checks if x is less than or equal to y: false
```

## Assignement Operators

```Javascript
let x = 10;
let y = 5;

// Assignment
let assignment = x; // Assigns the value of x to a new variable: 10

// Addition Assignment
x += y; // Equivalent to: x = x + y; // Adds the value of y to x: 10 + 5 = 15

// Subtraction Assignment
x -= y; // Equivalent to: x = x - y; // Subtracts the value of y from x: 15 - 5 = 10

// Multiplication Assignment
x *= y; // Equivalent to: x = x * y; // Multiplies the value of x by y: 10 * 5 = 50

// Division Assignment
x /= y; // Equivalent to: x = x / y; // Divides the value of x by y: 50 / 5 = 10

// Modulus Assignment
x %= y; // Equivalent to: x = x % y; // Finds the remainder of x divided by y: 10 % 5 = 0

// Exponentiation Assignment
x **= y; // Equivalent to: x = x ** y; // Raises x to the power of y: 10^5 = 100000

// Additional Example: Concatenation Assignment (for strings)
let message = "Hello";
message += " world!"; // Concatenates " world!" to the existing value of message: "Hello world!"
```
