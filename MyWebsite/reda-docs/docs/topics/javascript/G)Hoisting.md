## Function Hoisting

- Javascript has a special feature called function hoisting, this feature, takes your function that you declared after calling it, and puts the declaration before the function is called.

```javascript
sayHello(); // Output: "Hello!"
function sayHello() {
  console.log("Hello!");
}
```

## Variable Hoisting

- However, Hoisting works different for variables, it initialize them as undefined

```javascript
console.log(x); // Output: undefined
var x = 10;
```

## Hoisting Within A Scope

```javascript
function outer() {
  console.log(x); // Output: undefined
  var x = 10;
  function inner() {}
}
```

