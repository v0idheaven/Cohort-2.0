// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

// function sayHello(){
// console.log("Hello JavaScript");
// }
// sayHello();

//2. Create a function `add(a, b)` that returns their sum
//and log the result.

// function add(a,b){
//   return a+b;
// }
// let sum =add(5,8);
// console.log(sum);

//
// function greetings(name="Guest"){
// console.log(`Hi ${name}`);
// }
// greetings("Varun");

// function addUnlimited(...nums){
// let sum=0;
// for(let i=0; i<nums.length; i++){
//   sum = sum+nums[i];
// }
// console.log(sum);
// };
// addUnlimited(3,1,7,6);


// function addUnlimited(...nums){ 
//   let ans= nums.reduce(function(acc,val)
//   {
//     return acc+val;
//   },0)
// console.log(ans);}
// addUnlimited(1,5,8,2);

// (function(){
//   console.log("I run instantly!");
// }());


// function abc(){
//   let a=10;
//   function def(){
//     console.log(a);
//   }
//    def();
// }
// abc();
 

// let arr= ["mango","apple","papaya","banana","guava"];
// arr.push("grapes");
// arr.unshift("orange");
// console.log(arr);

// let arr= [2,4,5,7,8];
// for(let i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }


// let obj={
//   name:"Varun",
//   age:18,
//   city:"Bangalore"

// }
// for(let key in obj){
//   console.log(obj[key]);
// }

// setTimeout(function(){
//   console.log("Time's up!");
// },2000);



// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.

// function runTwice(fn){
// fn();
// fn();
// }
// runTwice(function(){
//   console.log("hi");
// });

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
// function pure(a,b){
// console.log(a+b);
// }
// pure(1,3);
// pure(1,3);

// let a=10;
// function impure(b){
// a++;
// console.log(a+b);
// }
// impure(5);
// impure(5);

//3. Write a function that uses object destructuring inside parameters to extract and print `name` and`age`.

// function abc({name,age}){
// console.log(name,age);
// }
// abc({name:"Varun", 
//   age:18});

//4.Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).

// let obj={
//   name:"Varun",
//   fnc:function(){
//     console.log(this);
//   },
//   fnc2:()=>{
//     console.log(this);
//   },
// };
// obj.fnc();
// obj.fnc2();

//arrow function apne "this" ki value apne parent se leta he or normal function kisi object me use krre hn to uske this ki value object hogi.


//5. Given an array of numbers, use `map()` to create a new array where each number is squared.

// let arr=[1,2,3,4,5,6,7];
// let newarr= arr.map(function(val){
//   return val*val;
// })
// console.log(newarr);

//6. Use `filter()` to get only even numbers from an array.

// let arr=[1,2,3,4,5,6,7,8,9];
// let newarr= arr.filter(function(val){
//   return val%2===0;
// });
// console.log(newarr);

//7.Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

// let salary=[1000,2000,3000];
// let newsalary= salary.reduce(function(acc,val){
//   return acc+val;
// },0)
// console.log(newsalary);

//8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars)

// let arr=["Varun","Anu","Yash","Adi","Gravy","Madhu","Harsh","Om"];
// let newarr= arr.some(function(val){
//   return val.length>3;
// })
// console.log(newarr);

//9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.

// let obj={
//   name:"Varun",
//   age:18
// }
//  Object.freeze(obj);
// obj.name="Varun Yadav";
//freeze m na obj add kar sakta na change kar sakta

//  Object.seal(obj);
// obj.email="v@v.v";
// obj.name="Varun Yadav"
//seal m obj add nhi kar sakta but change kar sakta h


//10.Create a nested object (`user -> address -> city`) and access the city name inside it.

// let obj={
//   user:{
//     address:{
//       city:"Bangalore",
//     }
//   }
// }
// let {city}=obj.user.address;