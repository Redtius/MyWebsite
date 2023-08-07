Strings are essential in Javascript, because Human expresses using words!

Let's start our journey by how you can use them:

## Declaration

```Javascript
const string = "The revolution will not be televised.";
console.log(string);
```

You can use double quotes or single quotes in Javascript to write a string.

if single quotes are in your string, **make sure you use double quotes to define the string!!**

or use the antislash "\" :

```Javascript
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```
## Concatenation

There's two ways to concatenate a string in Javascript:

1. Using ${}
   ```Javascript
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
```
2. Using '+'
   ```Javascript
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

- Note that to convert a Number into a string, you should use the `toString()` method present in each Number
```Javascript
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);
```

## Multiline Strings

```Javascript
const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);

/*
I like the song.
I gave it a score of 90%.
*/

```

- You can also use the `\n` .

## Useful String Methods

```Javascript
let str = "Hello, world!";

// length: Returns the length of the string
let length = str.length; // 13

// toUpperCase(): Converts the string to uppercase
let uppercase = str.toUpperCase(); // "HELLO, WORLD!"

// toLowerCase(): Converts the string to lowercase
let lowercase = str.toLowerCase(); // "hello, world!"

// indexOf(): Returns the index of the first occurrence of a specified substring
let indexOfComma = str.indexOf(","); // 5

// lastIndexOf(): Returns the index of the last occurrence of a specified substring
let lastIndexOfO = str.lastIndexOf("o"); // 8

// slice(): Extracts a portion of the string and returns a new string
let sliced = str.slice(7, 12); // "world"

// substring(): Extracts a portion of the string and returns a new string (similar to slice, but doesn't support negative indices)
let substring = str.substring(7, 12); // "world"

// substr(): Extracts a portion of the string starting from a specified position and returns a new string
let substr = str.substr(7, 5); // "world"

// replace(): Replaces a specified substring with another substring
let replaced = str.replace("world", "universe"); // "Hello, universe!"

// split(): Splits the string into an array of substrings based on a specified separator
let splitted = str.split(","); // ["Hello", " world!"]

// trim(): Removes leading and trailing whitespaces from the string
let trimmed = "   Hello, world!   ".trim(); // "Hello, world!"

// concat(): Concatenates two or more strings
let concatenated = str.concat(" Welcome!"); // "Hello, world! Welcome!"
```