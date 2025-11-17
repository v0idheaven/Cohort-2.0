// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,Comparison, Logical, Bitwise)
// a. Create two numbers a = 10 and b =3
// Perform and log: a + b, a - b, a * b, a / b, a % b.
//Answer: 
// let a=10;            
// let b=3;
// console.log(a+b);    //13
// console.log(a-b);    //7
// console.log(a*b);    //30
// console.log(a/b);    //3.333333333335
// console.log(a%b);    //1


// b. Write: let x = 5; x = x + 3;
//Answer:
// let x=5;
// x = x + 3;
// console.log(x); //8


// Now rewrite the same using +=.
//Answer: 
//  let x=5;
//  x += 3;
//  console.log(x); //8
// Do the same for -=, *=, /=.
//  let x=5;
//  x -= 3;
//  console.log(x);  //2


//  let x=5;
//  x *= 3;
//  console.log(x); //15


//  let x=5;
//  x /= 3;
//  console.log(x);  //1.6666666666666667
// c. let count = 5;
//Answer:
// let count=5;
// console.log(count); //5
// count++;
// console.log(count); //6


// let count=5;
// console.log(count); //5
// count--;
// console.log(count); //4


// Use count++ and log value before and after.
// Repeat for count–.
// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.
//Answer:
// console.log(5=="5");   //true
// console.log(5==="5");   //false

// e. Check if 10 is greater than 5, less than 20, and equal to 10.
// console.log(10>5);  //true
// console.log(10<20);  //true
// console.log(10===10); //true


// f. Try logical AND and OR:
// true && false
// console.log(true && false);  //false 


//  true || false
// console.log(true || false);   //true

// !(true)
//console.log(!true);  //false


// g. Predict the result of:
// (5 > 3 && 10 > 8),
// console.log(5>3 && 10>8); //true
//  (5 > 3 || 10 < 8)
// console.log(5>3 && 10<8);  //false
// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// console.log(5&1);     //1
// console.log(5|1);     //5
// Write result and your observation (no deep explanation needed now).
// & me dono me 1 hona compulsory he or | isme sirf 1 bhi chlega


// 2. Variable Hoisting in JavaScript

// a. Predict output of:
// console.log(a);
// var a = 10   
// undefined


// b. Predict output of:
// console.log(b);
//  let b = 10 
// Uncaught ReferenceError: Cannot access 'b' before initialization


// c. Predict output of:
//  test()
//  function test() { console.log("Hello") }  
// Hello


// d. Try writing a function expression before initialization and call it:
//  hello()
//  var hello = function() { console.log("Hi") }   // Uncaught TypeError: hello is not a function
// Write what happened and why.
//Answer:  var hello is hoisted, but only the declaration, not the function value.
//So before initialization, hello is undefined,and calling undefined() gives the TypeError.


// e. Write one sentence:
// What gets hoisted?
// What does not get hoisted fully?
//Answer:   Function declarations get fully hoisted (name + body).

// Variables declared with var get partially hoisted (only name, not value).
// let and const do not get hoisted fully (inaccessible before initialization).


// 3. Conditional Operators (if, else, else-if, ternary, switch)

// a. Take input using prompt for age.
// If age > 18 -> log “Adult”.
// Else -> log “Not adult”.

// let age=prompt("Age btao?");
// if(age>18)
// {
//     console.log("Adult");
// }
// else{
//     console.log("Minor");
// }

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”


// let marks=prompt("Kitne marks aaye?");
// if (marks>=90){
// console.log("A grade");
// }
// else if(marks>=75){
//     console.log("B grade");
// }
// else if(marks>=50){
//     console.log("C grade");
// }
// else{
//     console.log("Fail");
// }


// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”
 
// let city="Bhopal";
// if(city="Bhopal"){
//     console.log("MP");
// }
// else if(city="Delhi"){
//     console.log("Capital");
// }
// else{
//     console.log("unknown city");
// }


// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

// let score=40;
// let result= score>35 ? "Pass" : "Fail";
// console.log(result);    //Pass


// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

// let temperature =28;
// let weather = temperature > 30 ? "Hot" : "Pleasant";
// console.log(weather);  //Pleasant

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.


// let day=+prompt("Koi day number bolo");
// switch(day)
// {
//     case 1:console.log("Monday");
//     break;

//     case 2:console.log("Tuesday");
//     break;
    
//     case 3:console.log("Wednesday");
//     break;
    
//     case 4:console.log("Thursday");
//     break;
    
//     case 5:console.log("Friday");
//     break;
    
//     case 6:console.log("Saturday");
//     break;
    
//     case 7:console.log("Sunday");
//     break;

//     default :console.log("Invalid Day");
//     break;
// }

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

// let age= +prompt("Your age");
// let country= prompt("Your country");
// if(age > 18 && country === "India"){
//     console.log("Eligible for vote");
// }
// else{
//     console.log("Not eligible");
// }