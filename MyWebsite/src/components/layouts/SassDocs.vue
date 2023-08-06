<template>
  <div class="bg-white rounded-lg p-10 max-h-screen border overflow-auto col-span-3">
    <iframe src="./../../../docs/reda-docs/docs/src/index.md" frameborder="0"></iframe>
  </div>

  <div class="col-span-1">
    <VCourseBar :course-titles="titlesArray"/>
  </div>
  
</template>

<script setup lang="ts">
import VueMarkdown from 'markdown-vue'
import VCourseBar from '../shared/VCourseBar.vue';
import { ref } from 'vue';

const titlesArray = ref([
  'Gulp','Variables','Partials','Project Structure','Nested Rules','Math','Debugging','Map','Loops','Conditions',
  'Parent Selectors','Mixins','Functions','Functions','Utility Classes','Media Queries','Grid','Inheritence','Purge CSS','Updates'
]);




const code = `
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
`
</script>