//1.Print numbers from 1 to 10.

// for(let i=1; i<=10; i++)
// {
//     console.log(i);
// }

//2.Print only even numbers from 1 to 20.

// for(let i=1; i<21; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

//3.Print numbers from 10 to 1.

// for(let i=10; i>=1; i--){
//     console.log(i);
// }

//4. Print the word "Yes" 5 times.

// for(let i=0; i<5; i++){
//     console.log("Yes");
// }

//5. Print whether numbers from 1 to 10 are even or odd .

// for(let i=1; i<11; i++){
//     if(i%2===0){
//         console.log(`Even- ${i}`);
//     }
//     else{
//         console.log(`Odd - ${i}`)
//     }
// }

//6. Ask user for a number and say if it's positive or negative.

// let num= +prompt("tell number");
// if(num>=0){
//     console.log("Number is positive");
// }
// else{
//     console.log("Number is negative");
// }

//7. Ask user's age and check if eligibe to vote.
 
// let age = +prompt("tell your age");
// if(age>=18){
//     console.log("You can vote");
// }
// else{
//     console.log("you can't vote");
// }


//Error handling
// let age = prompt("tell your age");
// if(age===null){
//     console.error("you canclled it");
// } else {
//     if(age.trim().length===0){
//     console.error("write something");
// }
// else {
//     age= Number(age.trim());
//     if (isNaN(age)){
//         console.log("Pls enter a number");
//     }
//     else{
//          if (age >= 18) {
//                 console.log("You can vote");
//             } else {
//                 console.log("You can't vote")
//     }
// }

//8. Print multiplication table of 5

// for(let i=1; i<=10; i++)
// {
//     console.log(`5 X ${i} = ${5*i}`);
// }

//9. Count how many numbers between 1 and 15 are greater than 8
//  let count =0;
// for(let i=1; i<16; i++)
// {
//     if(i>8){
//      console.log(`Number greater than 8 is ${i}`);
//      count++;
//     }
// }
//console.log(`Total numbers greater than 8 are ${count}`);

//10.Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let sahipass="456";
// let pass= prompt("Apna password btao");
// if(pass==null){
//     console.error("cancel kyu kra?");
// }
// else
//     if(pass.trim().length===0){
//     console.log("password likho");
// }
// else if(pass===sahipass){
//     console.log("Access granted");
// }
// else{
//     console.log("Access not granted")
// }

//11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”    

// let sahipass="456";
// let attempts=3;
// while(attempts>0){
//     let pass= prompt("Apna password enter kro");
//     if (pass===sahipass){
//         console.log("Access granted");
//         break;
//     }
//     attempts--;
//     if(attempts>0){
//         console.warn(`Wrong password ${attempts} left only`);
//     }
//     else{
//         console.log("Account locked");
//     }

// }
//USING FOR LOOP
// let sahipass="456";
// let attempts=3;
// for(let i=3; i>=1; i--){ 
//     let pass=prompt("Apna password dalo");
//     if(pass===sahipass){
//         console.log("Access granted");
//         break;
//     }
//     else if(i>1){
//         console.log(`Wrong password - only ${i-1} left`);
//     }
//     else{
//         console.log("Account locked");
//     }
// }

// 12.Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
// let count=0;
// while(true){
//     let word= prompt("Kuch word type kro ya fr stop type kro end ke liye");
//     if(word==="stop"){
//         break;
//     }
//     if(word==="yes"){
//         count++;
//     }
// }
// console.log(`${count} bar "yes" type kia`);

//13.Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
// for(let i=1; i<=50; i++){
//     if(i%7===0){
//         console.log(`${i}`);
//     }
// }

// //14.Sum of all odd numbers from 1 to 30
// // Add only odd numbers. Print final sum.

// let sum=0;
// for(let i=1; i<=30; i++){
//     if(i%2!=0){
//         console.log( `${i}`);
//         sum+=i;
//     }
// }
// console.log(`Sum of all odd numbers from 1 to 30 is ${sum}`);

// 15. Keep asking number until user enters an even number
//  Use while loop. Stop only if input is even.

// while(true)
// {
//     let num=+prompt("Koi number likho agr even number likha to stop hojayega");
//     if(num%2===0){
//         console.log("number is even ab loop ruk jayega");
//         break;
//     }
//     else{
//         console.log("odd number tha woh!");
//     }
// }

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.
// let start= +prompt("pehla number bolo");
// let end=+prompt("akhri number bolo");
// for(let i=start; i<=end; i++){
//     console.log(i);
// }


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
// let count=0;
// for(let i=1; i<=20; i++)
// {
//     if(i%2!=0){
//         console.log(i);
//         count++;
//         if(count===3){
//             break;
//         }
//     }
// }


// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// let count=0;
// for(let i=0; i<5; i++){
//     let num=+prompt(` Number ${i+1} likho `);
//     if(num>0){
//         count++;
//     }
//   }
//     console.log(`total positive numbers are ${count}`);


//19.ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let balance=1000;
// for(let i=1; i<=3; i++){
//    let amount= +prompt("Kitna pesa nikalna he?" );
//     if(amount<=balance){
//       balance-=amount;
//       console.log(`${amount} withdraw hua ab ${balance} bacha he`);
//       }
//       else{
//         console.log("Insufficient balance");
//       }}