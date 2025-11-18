// Introduction to JavaScript
// 1.Open any website → right-click * Inspect * Console → type: document.title
// Answer: document.title
//         'Document'


// 2.Try: alert(“Hello from Sheryians!ˮ)
// Answer: Hello from Sheryians!


// 3. Write one line in your own words: “If HTML is skeleton, CSS is clothes — what is JS?ˮ
// Answer: If HTML is the skeleton and CSS is the clothes, then JavaScript is the brain and the movements that run that body.


// 4.Write one example of where youʼve seen JS being used (like popup, animation, etc.)
//Answer: When a user tries to submit a form without filling in all required fields — for example, an alert saying “Please enter your mobile number!”


// Linking JavaScript Files
// 1.	Create an HTML file and link JS file like this:
// 2.	In app.js, write: console.log(“Connected!ˮ)
// 3.	Move the script tag to the section and see what happens.
// 4.	Try using defer:

 //Anser: Connected!

// Running JS in Browser Console
 
// 1.Open console and type: 2 + 2
//Answer: 4

// 2.Type: alert(“Hiˮ)
//Answer: Hi


// 3.Try: prompt(“Your name?ˮ)
//Answer: 'Varun Yadav'


// 4.	Type: let city = "Bangaloreˮ; city
//Answer:let city="Bangalore";city
//'Bangalore'


// Variables and Keywords (var, let, const)
// 1.Declare your name using all three: var a = “Harshˮ; let b = “Sheryiansˮ; const c
// = “Schoolˮ
// 2.	Try reassigning them: a = “Updatedˮ; b = “Updatedˮ; c = “Updatedˮ
//Answer:var a="Varun"; a="updated";
//'updated'       
//let b="Yadav"; b="updated";
//'updated'
//const c="School"; c="updated";
//Uncaught TypeError: Assignment to constant variable.

// 3.Create a variable inside curly braces using let and log it outside.
//Answer: {let a=10;}console.log(a);
//Error: a is not defined


// 4.Predict output before running.
//Answer: Reference error as a is block scoped {}.
// 5.Write 3 examples where const is useful (like PI, baseURL, etc.)
//Answer: Api url, max user limit, app name



// Logging and Interaction (console, alert, prompt)
// 1.Log name, age, and city using console.log, console.info, console.warn.
//Answer: console.log("Varun Yadav",18,"Bangalore");
//  Varun Yadav 18 Bangalore
//console.info("Varun Yadav",18,"Bangalore");
//  Varun Yadav 18 Bangalore
//console.warn("Varun Yadav",18,"Bangalore");
// ⚠️ Varun Yadav 18 Bangalore



// 2.Use prompt to take userʼs name → alert a welcome message.
//Answer: prompt("Your Name");alert("Welcome");
//Varun Yadav
//Welcome
// 3.Log typeof of userʼs input.
//Answer: console.log(typeof "Varun Yadav");
//string
// 4.Try: let age = prompt(“Enter age:ˮ); console.log(age + 5); observe what happens.
//Answer:let age = prompt("Enter age:"); console.log(age + 5);
//185
//  Because it doesnt gets added instead it gets concatinated.


// Working with Strings
// 1.let msg = “I love Sheryiansˮ;
 
// 2.Try msg.slice(2, 6) and predict the result.

// 3.Try msg.split(ˮ “) and count words.

// 4.Try msg.replace(“loveˮ, “study atˮ).
//Answer:       let msg = "I love Sheryians";
// msg.slice(2,6);
// 'love'
// msg.slice(2,14);
// 'love Sheryia'
// msg.split(" ");
// (3) ['I', 'love', 'Sheryians']
// msg.replace("love","study at");
// 'I study at Sheryians'


// 5.Template string example: let name = “Harshˮ; console.log(Hey ${name}, welcome to JS!)
//Answer:let name = "Varun Yadav"; console.log(`Hey ${name}, welcome to JS!`);
//Hey Varun Yadav, welcome to JS!

// 6.Check if msg.includes(“loveˮ)

//Answer:// console.log(msg.includes("Love")); 
// true


// Statements and Semicolons
// 1.Remove semicolon and check if code still runs.
//Answer:Yes it works
// 2.Combine two statements in one line and see if it breaks.

// let a = 4
// let b = 5
// console.log(a) // 4
// console.log(b) // 5
// No it is not breaking;


// 3.Write 3 console.log statements without semicolons and predict output.

// console.log("Varun") // Varun
// console.log("Yadav") // Yadav
// console.log("School") // School


// Comments
// 1.Write your name as a single-line comment.
//  Varun Yadav

// 2.Write a 3-line comment explaining what your code does.
// hey
// im Doing
// my assignment
// 3.Hide one console.log using comment and check output.
// console.log("Hello");


// Expressions vs Statements
// 1.Type 5 + 10 (expression).

// Answer:5+10=15
// 2.Type let x = 10; (statement).
// Answer: let x = 10; 
// x = 10;
 

// 3.Which one gives a value immediately?
 //Answer: expression


// 4.Try: let y = (5 + 10) * 2; console.log(y)
//Anwser:30

//  5.Write one line explaining the difference between both.
//Answer: An expression produces a value where as statement performs an action but doesn't return a value directly.



// Data Types
// 1.let age = 25; let name = “Harshˮ; let isStudent = true; let skills = [“JSˮ,
// “HTMLˮ]; let user = { city: “Bhopalˮ }; let x = null; let y; let z = Symbol(“idˮ)
//Answer: let age = 25;
// console.log(typeof (age)); 
// number

// let isStudent = true;
// console.log(typeof(isStudent)); 
//  boolean

// let skills = ["JS", "HTML"];
// console.log(typeof skills);
// object

// let user = { city: "Bhuabneswar" };
// console.log(typeof user); 
//  object

// let x = null;
// console.log(typeof x); 
//  object

// let y;
// console.log(typeof y); 
//  undefined

// let z = Symbol("id");
// console.log(typeof z); 
//  symbol

// 2.Log typeof each variable.
// 3.Change one value and recheck typeof.
// 4.Try adding a number and string together.
//Answer:console.log(7 + "Varun");
//7Varun 


// Special Values
// 1.Log 1 / 0, 0 / 0, Number(“abcˮ), undefined + 1
//Answer:console.log(1/0);
//Infinity

//console.log(0/0);
//NaN

//console.log(Number("abc"));
//NaN

//console.log(undefined+1)
//NaN

// 2.Write what appears (Infinity, NaN, etc.)
// 3.Write one line explaining when to use null vs undefined.
//Answer:Use null when you intentionally assign "no value" and undefined when a variable has been declared but not yet assigned a value.

// Primitive vs Reference
// 1.let x= 5; let y = x; y = 10; console.log(x, y)
//Answer:5 10

// 2.let obj1 ={name: "Harsh" }; let obj2 = obj1; obj2.name = "Sheryians"; console.log(obj1.name)
// Answer:let obj1={name:"Varun"}; let obj2=obj1; obj2.name="Yadav"; console.log(obj1.name);
//Yadav

// 3.Observe which one changes together.
//Answer: It printed "Yadav" because obj1 and obj2 point to the same object in memory.So when i changed obj2.name, it also changed obj1.name   
//If we want a separate copy, we should write:
// let obj2 = {...obj1};
// Then changing obj2 won’t affect obj1.