## Useful Array Methods

```Javascript
let arr = [1, 2, 3, 4, 5];

// length: Returns the length of the array
let length = arr.length; // 5

// push(): Adds one or more elements to the end of the array and returns the new length
let newLength = arr.push(6, 7); // [1, 2, 3, 4, 5, 6, 7], newLength = 7

// pop(): Removes the last element from the array and returns that element
let lastElement = arr.pop(); // [1, 2, 3, 4, 5], lastElement = 7

// unshift(): Adds one or more elements to the beginning of the array and returns the new length
let newLength = arr.unshift(0, -1); // [-1, 0, 1, 2, 3, 4, 5], newLength = 7

// shift(): Removes the first element from the array and returns that element
let firstElement = arr.shift(); // [0, 1, 2, 3, 4, 5], firstElement = -1

// indexOf(): Returns the index of the first occurrence of a specified element in the array
let indexOfThree = arr.indexOf(3); // 2

// lastIndexOf(): Returns the index of the last occurrence of a specified element in the array
let lastIndexOfFour = arr.lastIndexOf(4); // 4

// slice(): Returns a shallow copy of a portion of the array into a new array
let sliced = arr.slice(2, 5); // [2, 3, 4]

// splice(): Changes the contents of an array by removing, replacing, or adding elements in-place
let spliced = arr.splice(1, 2, 10, 11); // [1, 10, 11, 4, 5], spliced = [2, 3]

// concat(): Returns a new array by concatenating two or more arrays
let concatenated = arr.concat([6, 7], [8, 9]); // [1, 10, 11, 4, 5, 6, 7, 8, 9]

// join(): Joins all elements of an array into a string
let joined = arr.join("-"); // "1-10-11-4-5"

// reverse(): Reverses the order of elements in the array
let reversed = arr.reverse(); // [5, 4, 11, 10, 1]

// sort(): Sorts the elements of the array in place (default: lexicographic order)
let sorted = arr.sort(); // [1, 10, 11, 4, 5]
```

## 