'use strict'

// task 1

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// const userToDelete = "Ajax";
// const userToInsertBefore = "Jay";

// users.shift();
// users.pop();
// users.unshift('Lex');
// users.push('Conan', 'Barbara');

// alert(users);

// task 2

// let num = 4;

// do {
//     console.log(num);
//     num += 1;
// } while (num <= 400);


// task 3

// let num = 4;

// do {
//     console.log(num);
//     num += 3;
// } while (num <= 13)

// task 4

// let num = 654;

// do {
//     console.log(num);
//     num -= 1;
// } while (num >=0);

// task 5

// let num = 1983;

// do {
//     console.log(num);
//     num += 1;
// } while (num <= 2017)

// task 6

// let num = 1000;
// let k = 0;

// do {
//     num /= 2;
//     k += 1;
// } while (num >= 50);
// console.log(k);

// task 7

// const arr = [2, 5, 9, 15, 0, 4]

// for (let k = 0; k < arr.length; k += 1) {
//     if (arr[k] > 3 && arr[k] < 10) {
//         console.log(arr[k]);
//     }
// }

// task 8

// let arr = [];
// let sum = 0;
// let a;

// for (let k = 0; k < 5; k += 1) {
//     a = +prompt("Enter")
//     arr.push(a);
//     if (arr[k] > 0) {
//         sum += arr[k];
//     }
// }
// console.log(sum);

// task 9

// let arr = [1, 2, 5, 9, 3, 13, 4, 10];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//         alert("4 is present")
//         break;
//     }
// }

// task 10

// let arr = ['10', '20', '30', '50', '235', '3000'];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].charAt(0) == 1 || arr[i].charAt(0) == 2 || arr[i].charAt(0) == 5) {
//         console.log(arr[i])
//     }
// }

// task 11

// const arr = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// for (let i = 0; i < arr.length; i++) {
//     console.log((i + 1) + " - "  + arr[i])
// }

// task 12

// const message = "Proin sociis natoque et magnis parturient montes mus";
// let words;
// let price = 0;

// words = message.split(" ");
// console.log(words);
// for (let i = 0; i < words.length; i++) {
//     price += 10;
// }
// console.log(words.length);
// console.log(price);

// task 13

// let num

// do {
//     num = prompt("Enter number bigger than 100")
//     if (num === null) {
//         break
//     } else if (num <= 100) {
//         alert("Again")
//         continue;
//     } else if (num > 100) {
//         alert("Takne")
//         break;
//     }
// } while (num < 100)

// task 14

// let numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// let matched = [];

// for (let k = 0; k < numbers.length; k += 1) {
//     if (numbers[k] > num) {
//         matched.push(numbers[k]);
//     }
// }
// console.log(matched); 

// task 15

// const message = "May the force be with you";
// let longestWord;
// let text = message.split(" ");  

// task 16

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
// let min = numbers[0]
// let max = numbers[numbers.length - 1]
// let choise;

// do {
//     choise = +prompt("Enter number between " + min + " and " + max + " !");
//     if (numbers.includes(choise)) {
//         alert("WIN")
//     } else {
//         alert("LOSE")
//     }
// } while (true)

// task 17

// let num = []
// let a;
// let sum = 0;

// do {
//     a = Number(prompt("Enter your numbers"));
//     if(a !== 0){
//         num.push(a)
//     }
// } while (a !== 0)

// for (const key of num) {
//         sum += key
// }
// console.log(sum);

// task 18

// const numbers = [12, 15, 25, 37, 41];
// let min = numbers[0]
// let max = numbers[numbers.length - 1]
// let choise;

// do {
//     choise = +prompt("Enter number between " + min + " and " + max + " !");
//     if (numbers.includes(choise)) {
//         alert("WIN")
//     } else if (choise === 0) {
//         break;
//     } else if (isNaN(choise)) {
//         alert("Not a Number")
//     } else {
//         alert("LOSE")
//     }
// } while (true)

// task 19

// let num = []
// let userInput;
// let total  = 0;

// do {
//     userInput = Number(prompt("Enter your numbers"));
//     if(isNaN(userInput)){
//         alert("This is not a number")
//         continue
//     } else if (userInput !== 0) {
//         num.push(userInput)
//     }
// } while (userInput !== 0)

// for (const key of num) {
//         total  += key
// }
// console.log("Общая сумма чисел равна " + total);

// task 20

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let userEnter = prompt("Enter your password");

// for (let i = 3; i >= 0; i--) {
//     if (passwords.includes(userEnter)){
//         alert("Welcome!");
//         break;
//     } else if (i == 0) {
//         alert("BAN")
//         break
//     } else if (userEnter === null) {
//         break
//     } else {    
//         alert("Wrong password! You have " + i + " attempts left")
//         userEnter = prompt("Enter your password");
//     }
// }





















































































































