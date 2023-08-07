## Dates And Time in JS

- To Create a Date in JS, you can use Date() constructor.

- Date Object has a lot of methods that you can use to manipulate dates.

```javascript
const now = new Date();

console.log(now);
console.log(typeof now); // Object

// years, months, days, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth (0-based):', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay (0-based):', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// timestamps
console.log('timestamp:', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
```

## Timestamps

Instead of using Dates to make calculations, we usually use timestamps:

```javascript
//const before = new Date('02/01/2019 7:30:59');
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

const diff = now.getTime() - before.getTime();
// const diff = now - before;

console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(`the before date was ${mins} mins ago`);
console.log(`the before date was ${hours} hours ago`);
console.log(`the before date was ${days} days ago`);

// converting timestamps to dates
const timestamp = 1675938474990;
console.log(new Date(timestamp));
```
## Date-fns Library

You can use the methods in this library to simplify the use of dates:

[date-fns - modern JavaScript date utility library](https://date-fns.org/).