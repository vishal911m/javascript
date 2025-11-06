//ep2 - How javascript code is executed

// var n=2;

// function square(num){
//   var ans = num * num;
//   return ans;
// }

// var square2 = square(n);
// var square4 = square(4);

// console.log("Square of 2: ",square2);
// console.log("Square of 4: ",square4);

//ep2-end

//ep3 - hoisting in javascript

// var x=7;
// var getName = () => {
//   console.log("Namaste Javascript");
// }

// getName();
// console.log(x);
// console.log(getName);
// console.log(getName2);

// ep3-end

//ep4
// var x=1;
// a();
// b();
// console.log(x);

// function a(){
//   var x=10;
//   console.log(x);
// }

// function b(){
//   var x=100;
//   console.log(x)
// }
// ep4 - end

//ep5

// var a= 10;

// function b() {
//   var x= 10;
// }

// console.log("window:", window.a);
// console.log("a:", a);
// console.log(x);

//ep5 - end

// ep6

// console.log(a);
// var a=7;

// console.log(a);

// if (a===undefined) {
//   console.log("a is undefined");
// } else {
//   console.log("a is not undefined");
// }

// ep6 - end

//ep7

// function a(){
//   // console.log(b);
//   var b=10;
//   c();
//   function c(){
//     console.log("The value of b is :", b);
//   }
// }
// // var b=10;
// a();

//ep7-end

//ep8 let and const in js | temporal dead zone


// let a=10;
// console.log(a);
// var b=100;
// console.log(b);

// console.log(a); // ❌ ReferenceError
// let a = 10;
// console.log(a); // ✅ 10

// console.log(b); // ✅ Undefined
// var b = 100;
// console.log(b); // ✅ 100

// let num = 5;
// num(); // ❌ You cannot call a number like a function - gives type error

//ep8-end

//ep9 - Block Scope and shadowing in JS

// {} - a block in javascript is a section of code enclosed in curly braces{} . Blocks groups statements together 
// and define boundaries for certain type of scopes, such as block scope and control flow constructs.
 
// Block scope --- 

// //shadowing using var 
// var a = 100;
// {
//  var a = 10;
//  let b = 20;
//  const c =30; 
//  console.log("Block Scope: ",a);
//  console.log("Block Scope: ",b);
//  console.log("Block Scope: ",c);
// }
//  console.log("Global Scope: ",a);
//  console.log("Global Scope: ",b);
//  console.log("Global Scope: ",c);

// //shadowing using let ---
// let b = 100; // exist in script (use debugger to view this in chrome)
// {
//  var a = 10;
//  let b = 20;
//  const c =30; 
//  console.log("Block Scope of a: ",a);
//  console.log("Block Scope of b: ",b);
//  console.log("Block Scope of c: ",c);
// }
//  console.log("Global Scope of a: ",a);
//  console.log("Global Scope of b: ",b);

// //shadowing using const ---
// const c = 100;
// {
//  var a = 10;
//  let b = 20;
//  const c =30; 
//  console.log(a);
//  console.log(b);
//  console.log(c);
// }
//  console.log(c);

// //shadowing using function ---
// const c = 100;
// function x(){
//  const c =30;
//  console.log(c);
// }
// x();
//  console.log(c);

// // illegal shadowing:
// let a=20;
// {
//   var a=20; // gives Uncaught SyntaxError - 'a' has already been declared
// }

// // but this shadowing is valid:
// let a=20;
// function x(){
//   var a=30; // var is not crossing the boundary of its scope - because var is function scoped
//   console.log(a);
// }
// x();
// console.log(a);

// // shadowing using const is also valid ---
// const a=20;
// {
//   const a=100;
//   {
//     const a=200;
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);

// let x = 10; // Outer scope variable
// function example() {
//   let x = 20; // Inner scope variable, shadows outer 'x'
//   console.log("value of x in inner scope: ",x); // Prints 20
// }
// example(); //function call
// console.log("value of x in outer scope: ",x); // Prints 10

//ep9-end

//ep10

// function x(){
//   var a=7;
//   function y(){
//     console.log(a);
//   }
//   y();
// }
// x();

function x(){
  var a=7;
  return function y(){
    console.log(a);
  }
  // y();
}
var z = x();
console.log(z);
z();

// function z(){
//   var b=900;
//   function x(){
//     var a=7;
//     function y(){
//       console.log(a,b);
//     }
//     y();
//   }
//   x();
// }
// z();


//ep10-end

//procodr

// x();
// var x = 20;
// function x(){
//   console.log("Calling function")
// }
// x();

// function outer(){
//   function inner(){
//     console.log(x);
//   }
//   const x = 5;
//   return inner;
// }

// const inner = outer();
// console.dir(inner);
// inner();

//procodr-end

//FireShip - closure video on youtube

// for(var i=0; i<3; i++){
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }

//FireShip-end

//ep11

// function x(){
//   var i=1;
//   setTimeout(function(){
//     console.log("Displaying after timeout");
//     console.log(i);
//   }, 5000);
//   console.log("Namaste Javascript");
// }
// x();

// function x(){
//   for(var i=1; i<=5; i++){
//     function close(i){
//       setTimeout(function(){
//         console.log(i);
//       }, i*1000);
//     }
//     close(i)
//   }
//   console.log("Namaste Javascript");
// }
// x();

// function x(){
//   for(let i=1; i<=5; i++){
//     setTimeout(function(){
//       console.log(i);
//     }, i*1000);
//   }
//   console.log("Namaste Javascript");
// }
// x(); // without closure, the var reference gives the latest values as it does not retain the original value, but rather has the reference, so any update in value after timeout will be shown.
//If we use let/const because they have block scope, every time a new copy of the variable is attached, thus this can be done without closure.

//ep11-end

//gpt

// function example() {
//   // console.log(x); // undefined (due to hoisting with `var`)
//   // console.log(y); // Error: Cannot access 'y' before initialization
//   var x = 10; // Function scoped
//   let y = 20; // Block scoped
// }
// example();

//loop scoping:
// Using var
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(`var i: ${i}`), i*1000);
// }

// Using let
// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log(`let j: ${j}`), j*1000);
// }

//gpt-end

//ep13 - First class functions ft. Anonymous functions

// // Function statement aka function declaration
// function a () {
//   console.log("a is called");
// }
// a();

// //Function expression 
// var b = function(){
//   console.log("b is called");
// }
// b();

// // Anonymous function
// function(){

// }

// // Named function expression
// var c = function xyz(){
//   console.log("xyz function");
// }

// // First Class functions - ability to be used as values
// var b= function (param1){
//   return function xyx(){

//   }
// }

// console.log(b());


//ep13-end

//ep14 - Callback functions in js ft. event listeners:

// what is a callback function in javascript

// function eventListener(){
//   let count=0;
//   document.getElementById("clickMe").addEventListener("click", function click(){
//   console.log("Button clicked", ++count);
// });
// };
// eventListener();

// Javascript is a synchronous and single-threaded language

// Blocking the main thread

// Power of callbacks?

// Deep about event listeners

// Closures demo with Event Listeners

// Scope demo with Event Listeners

// Garbage collection and removeEventListener

//ep14-end

//ep15 - Asynchronous javasctipt and event loop:

// console.log("Start");

// setTimeout(function cb(){
//   console.log("Timeout callback function executed.(5 seconds)");
// }, 5000);

// console.log("End");

// //million line of code simulation 

// let startTime = new Date().getTime();
// let endTime = startTime;
// while(endTime < startTime + 10000){
//   endTime = new Date().getTime();
// }

// console.log("While loop ended.(10 seconds)");

//ep15-end

//ep18

// function x(){
//   console.log("Welcome");
// }

// function y(x){
//   x();
// }

// const radius = [1,2,3,4,5,6,7,8,9,10];

// const area = function(radius){
//   return Math.PI * radius * radius;
// }

// const circumference = function(radius){
//   return 2 * Math.PI * radius;
// }

// const diameter = function(radius){
//   return 2 * radius;
// }

// const calculate = function (radius, formula){
//   const output = [];
//   for(let i=0; i<radius.length; i++){
//     output.push(formula(radius[i]));
//   }
//   return output;
// }

// Array.prototype.calculate = function (formula){
//   const output = [];
//   for(let i=0; i<this.length; i++){
//     output.push(formula(radius[i]));
//   }
//   return output;
// }

// console.log("Execution using Map function, Area:",radius.map(area));
// console.log("Execution using Prototyping, Area:",radius.calculate(area));
// console.log("Execution using Prototyping, Circumference:",radius.calculate(circumference));
// console.log("Execution using Prototyping, Diameter:",radius.calculate(diameter));

// console.log("Area: ",calculate(radius, area));
// console.log("Circumference: ",calculate(radius, circumference));
// console.log("Diameter: ",calculate(radius, diameter));

//ep18-end  

//Prototype and prototypal inheritance

// let arr = ["Vishal", "Mohan"];
// let object = {
//   name: "Vishal",
//   city: "Chennai", 
//   getIntro: function(){
//     console.log(this.name + "from " + this.city);
//   }
// }

// let object2 = {
//   name: "Vishal",
// }

// //Never do this
// object2.__proto__ = object;

// Function.prototype.mybind = function(){
//   console.log("This is a function");
// }

// function fun(){
//   //
// }

// function fun2(){
//   //
// }

//Prototype and prototypal inheritance - end

//ep19 map, filter, reduce

//map
// const  arr = [1,2,3,4,5,6];

// function double(x){
//   return x * 2;
// }

// const output = arr.map((x) => x.toString(2));
// console.log("Binary number conversion: ",output);

//filter

// const arr = [1,2,3,4,5,6,7,8,9,10,11];

// function isOdd(x){
//   return x%2 ;
// }

// const output = arr.filter(isOdd);

// console.log(output);

//reduce

//sum of all numbers
// const arr = [1,2,3,4,5,6,7,8,9,10];

// function findSum(arr){
//   let sum = 0;
//   for(let i=0; i<arr.length; i++){
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(findSum(arr));

//same logic using reduce() function:
// const output = arr.reduce(function(acc, curr){
//   acc= acc+curr;
//   return acc;
// }, 0);

// console.log(output);

//largest of all numbers
// const arr = [1,2,3,4,5,6,7,8,9,10,90];

// const findMax = function(arr){
//   let max = 0;
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax(arr));

// const findMax = arr.reduce(function(acc, curr){
//   if(acc > curr){
//     acc = curr;
//   }
//   return curr;
// }, 0)

// console.log(findMax);

//creates an object where the keys are ages, and the values are the count of how many users have that age.
// const users = [
//   {firstName: "vishal", lastName: "Mohan", age: 29},
//   {firstName: "donald", lastName: "trump", age: 75},
//   {firstName: "elon", lastName: "musk", age: 50},
//   {firstName: "deepika", lastName: "padukone", age: 29},
// ];

// const output = users.reduce(function(acc, curr){
//   if(acc[curr.age]){
//     acc[curr.age] = ++ acc[curr.age];
//   }else{
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(output);

//filter out all the ppl who are less than 40 years of aga and display only their first name

// const output1 = users.filter((x) => x.age<40).map((x) => x.firstName);

// console.log(output1);

//same operation using reduce function:

// const output2 = users.reduce(function(acc, curr){
//   if (curr.age<30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, [])

// console.log(output2);

//ep19-end

//practice
//   const arr = [1,2,3,4,5,6,7,8,9,10];

// // function double(x){
// //   for(let i=0; i<arr.length; i++){
// //     arr[i] = 2 * arr[i];
// //   }
// //   return arr;
// // }

// // console.log("Double of numbers", double(arr));
// function double(x){
//   return 2 * x
// }

// const output3 = arr.map(double);

// console.log("Double of numbers",output3);

// function isOdd(x){
//   return x%2;
// }

// const output4 = arr.filter(isOdd);
// console.log("Odd Numbers:",output4)

// function findSum(x){
//   let sum=0;
//   for(let i=0; i<arr.length; i++){
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log("Sum of all the elements in the array:",findSum(arr));

// const findSum1 = arr.reduce(function(acc, curr){
//   acc = acc + curr;
//   return acc;
// }, 0)

// console.log("Sum of all the elements in the array using reduce:",findSum1);

// //find the largest number in the array

// function findMax(arr){
//   let max = 0;
//   for(let i=0; i<arr.length; i++){
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log("Maximum of all the numbers:",findMax(arr));

// const findMax1 = arr.reduce(function(acc, curr){
//   if(curr>acc){
//     acc=curr;
//   }
//   return acc;
// }, 0);

// console.log("Maximum of all the numbers using reduce function:",findMax1);

// // //reduce example 2

// const names = [
//   {firstName: "Vishal", lastName: "Mohan", age: 29},
//   {firstName: "Vishal", lastName: "Mohan", age: 50},
//   {firstName: "Vishal", lastName: "Mohan", age: 45},
//   {firstName: "Vishal", lastName: "Mohan", age: 29},
//   {firstName: "Vishal", lastName: "Mohan", age: 42},
//   {firstName: "Vishal", lastName: "Mohan", age: 29},
// ];

// const output= names.reduce(function(acc, curr){
//   if(acc[curr.age]){
//     acc[curr.age] = ++ acc[curr.age];
//   }else{
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log("Age accumulator",output);

// // //display firstName

// const firstName = names.filter((x) => x.age> 30).map((x) => x.firstName);

// console.log("First Name accumulator:",firstName);

// const firstName2 = names.reduce(function(acc, curr){
//   if(curr.age > 30){
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);

// console.log("First Name accumulator using reduce function:",firstName2);


//practice-end

//s2ep2 - promises

// const github_api = "https://api.github.com/users/vishal911m";

// const user = fetch(github_api);

// console.log(user);

//s2ep2-end

//s2ep3 - creating a promise , chaining and error handling

// const cart = ["shoes", "pants", "kurta"];

// createOrder;
// proceedToPayment;
// // showOrderSummary;
// // updateWallet;

// createOrder(cart) //orderId
// // console.log(promise);   
// .then(function(orderId){
//   console.log(orderId);
//   return orderId;
//   // proceedToPayment(orderId);
// })
// .then(function(orderId){
//   return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//   console.log(paymentInfo);
// })
// .catch(function(err){
//   console.log(err.message);
// })
// .then(function(orderId){
//   console.log("No matter what happens, I will definitely be called.");   
// })

// function createOrder(cart){
//   const pr = new Promise(function(resolve, reject){
//     //logic:
//     //createOrder
//     //validateCart
//     //orderId
//     if(!validateCart(cart)){
//       const err = Error("Cart is not valid");
//       reject(err);
//     }
//     //logic for createOrder
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(function(){
//         resolve(orderId);
//       }, 5000);
      
//     }
//   });

//   return pr;
// }

// function proceedToPayment(orderId){
//   return new Promise(function(resolve, reject){
//     resolve("Payment Successfull");
//   })
// }

// function validateCart(cart){
//   return false;
// }



//s2ep3 - end

// ep4

// const p1 = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     resolve("Promise resolved successfully 1 !!");
//   }, 20000);
// });

// const p2 = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     resolve("Promise resolved successfully 2 !!");
//   }, 40000);
// });

// async function getData(){
//   return p;
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

// async function getData(){
//   const val = await p;
//   console.log(val);
// }
// getData();

// function getData(){
//   p.then((res)=> console.log(res));
//   console.log("Namaste!");
// }
// getData();

// async function handlePromise(){
//   console.log("Hello world");
//   const val1 = await p1;
//   console.log("Namaste");
//   console.log(val1);

//   const val2 = await p2;
//   console.log("Namaste2");
//   console.log(val2);
// }
// handlePromise();

// const API_URL = "https://api.github.com/users/vishal911m";

// async function handlePromise() {
//   const data = await fetch(API_URL);
//   const jsonValue = await data.json();
//   console.log(jsonValue);
// }
// handlePromise();

// ep4-end

// gpt

// const myPromise = new Promise((resolve, reject) => {
//   let success = true; // Change this to false to test rejection
//   setTimeout(() => {
//     if (success) {
//       resolve("Promise resolved successfully!");
//     } else {
//       reject("Promise rejected due to an error.");
//     }
//   }, 2000);
// });

// console.log("Before promise execution...");
// myPromise.then((message) => {
//   console.log("Success:", message);
// }).catch((error) => {
//   console.error("Error:", error);
// });
// console.log("After promise execution...");


// gpt-end

//ep5 Primise API

// const p1 = new Promise((resolve, reject) => {
//   // setTimeout(()=> resolve("P1 success"), 3000);
//   setTimeout(()=> reject("P1 fail"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   // setTimeout(()=> resolve("P2 success"), 1000);
//   setTimeout(()=> reject("P2 fail"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   // setTimeout(()=> resolve("P3 success"), 2000);
//   setTimeout(()=> reject("P3 fail"), 2000);
// });

// Promise.any([p1, p2, p3])
// .then(res => {
//   console.log(res);
// })
// .catch((err) => {
//   console.error(err);
//   console.log(err.errors);
// });

//ep5-end

//ep6
// "use strict"

// // this in global space 

// console.log(this);

// // this inside a function

// function x(){
//   // the value depends on strict/not-strict mode
//   console.log(this);
// }
// x(); 
// window.x();

// this inside not-strict mode - (this substitution)

// if the value of this keyword is undefined or null, 
// this will be replaced with global object

// this value depends on how this is called(window) 

// this inside an object's method

// call apply bind methods (sharing methods)

// ehiss inside arrow function

// this inside nested arrow function 
 
// this inside DOM

//ep6-end

// youtube video - Feb 15

//https://www.youtube.com/watch?v=ssRvlc57CCk&list=WL&index=3

// let emp = [
//   {
//     "name": "abc",
//     "age": 30
//   },
//   {
//     "name": "xyz",
//     "age": 20
//   },
//   {
//     "name": "cde",
//     "age": 25
//   },
//   {
//     "name": "fgh",
//     "age": 28
//   },
//   {
//     "name": "xyz",
//     "age": 20
//   },
//   {
//     "name": "cde",
//     "age": 25
//   },
//   {
//     "name": "xyz",
//     "age": 20
//   },
//   {
//     "name": "cde",
//     "age": 25
//   },
// ]

// let filteredEmp = emp.filter(person => person.age < 26);
// console.log("filteredEmp:",filteredEmp)

// let appDiv = document.getElementById("app");

// filteredEmp.forEach(person => {
//   let p = document.createElement("p");
//   p.textContent = `Name: ${person.name}, Age: ${person.age}`;
//   appDiv.appendChild(p);
// });



// filter below age 26 json value (name,age )

//youtube video - end