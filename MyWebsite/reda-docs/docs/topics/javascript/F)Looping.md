## Loops Types

### For Loop

```Javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}
```

### While Loop

```Javascript
let i = 0;
while (i < 5) {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
}
```

### do..While Loop

```Javascript
let i = 0;
do {
  console.log(i); // Output: 0
  i++;
} while (i < 0);
```

### For..in Loop

- Iterates over the enumerable properties of an object.

```Javascript
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(key + ": " + person[key]); // Output: name: John, age: 30, city: New York
}
```
### For..of Loop

- Iterates over the iterable objects such as arrays, strings, etc.

```Javascript
const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit); // Output: apple, banana, orange
}
```

## Control Flow Statements

### Break

Terminates the loop and transfers control to the next statement outside the loop.

```Javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i); // Output: 0, 1, 2
}
```

### Continue

Skips the rest of the current iteration and continues to the next iteration of the loop.

```Javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i); // Output: 0, 1, 3, 4
}
```

## Useful functions to use with Loops

### Map

Creates a new array by calling a provided function on each element of the original array.

```Javascript
const numbers = [1, 2, 3, 4, 5];
const multiplied = numbers.map((num) => num * 2);
console.log(multiplied); // Output: [2, 4, 6, 8, 10]
```

### Find

Creates a new array with all elements that pass a certain condition defined by a provided function.

```Javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```


