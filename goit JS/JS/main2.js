'use strict';

// 1 ------------------------------------------------------

// const arr1 = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3];

// const arr3 = arr1.concat(arr2)
// alert(arr3)

// 2 ------------------------------------------------------

// const arr1 = ['a', 'b', 'c'];

// arr1.push(1, 2, 3)
// alert(arr1)

// 3 -------------------------------------------------------

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = arr1.concat(arr2)
// alert(arr3)


// 4 -------------------------------------------------------

// const arr1 = [1, 2, 3];

// arr1.reverse();
// alert(arr1);

// 5 -------------------------------------------------------

// const arr1 = [1, 2, 3];

// arr1.push(4, 5, 6)
// alert (arr1)

// 6 --------------------------------------------------------

// const arr1 = [1, 2, 3];

// arr1.unshift(4, 5, 6)
// alert (arr1)

// 7 --------------------------------------------------------

// const arr1 =  ['js', 'css', 'jq'];

// alert(arr1[0]);

// 8 --------------------------------------------------------

// const arr1 =  ['js', 'css', 'jq'];

// alert(arr1[2]);

// 9 --------------------------------------------------------

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.slice(0, 3)

// alert(arr2)

// 10 -------------------------------------------------------

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.slice(3, 5)

// alert(arr2)

// 11 --------------------------------------------------------

// const arr1 = [1, 2, 3, 4, 5];
// arr1.splice(1, 2)

// alert(arr1)

// 12 --------------------------------------------------------

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.splice(1, 3)

// alert(arr2)

// 13 --------------------------------------------------------

// const arr1 = [1, 2, 3, 4, 5];

// arr1.splice(3, 0, 'a', 'b', 'c')
// alert(arr1)

// 14 --------------------------------------------------------

// const arr1 = [1, 2, 3, 4, 5];

// arr1.splice(1, 0, 'a', 'b')
// arr1.splice(6, 0, 'c')
// arr1.splice(8, 0, 'e');
// alert(arr1)

// task 1 ----------------------------------------------------

// const userAnimals = prompt('Enter your animal');
// const arr = ['cat', 'dog', 'cock', 'bird', 'cunt'];
// let animals = Math.floor(Math.random()*arr.length);

// if (arr[animals] === userAnimals) {
//     alert('you win!!!');
// } else {
//     alert('loser!!!');
//     alert('computer chose ' + arr[animals]);
// }

// task 2 ----------------------------------------------------

// const userChoise = prompt('enter your choise');
// const arr = ['Rock', 'Paper', 'Scissors'];
// let choise = Math.floor(Math.random()*arr.length);

// if (userChoise === arr[choise]) {
//     alert(arr[choise])
//     alert('DRAW!!!')
// } else {
//     if ((userChoise === 'Rock' && arr[choise] === 'Scissors') || (userChoise === 'Paper' && arr[choise] === 'Rock') || (userChoise === 'Scissors' && arr[choise] === 'Paper')) {
//         alert(arr[choise])
//         alert('YOU WON!!!')
//     } else {
//         alert(arr[choise])
//         alert('LOSER!!!')
//     }
// }

// task 3 ------------------------------------------------------

// let a = prompt("ENTER YOUR LINE");
// let b = a.split("");
// let c = b.slice();

// c.reverse();
// console.log(c);

// let d = c.join(' ')
// alert(d);

// task 4 ------------------------------------------------------

// const login = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col'];
// const userLogin = prompt("Enter login");

// if (login.includes(userLogin)) {
//     alert("Login already exists!")
// } else {
//     alert("Welcome!")
// }

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
// let a = 0;
// let longestWord;
// let text = message.split(" ");

// for (let i = 0; i < text.length; i++) {
//     if (a < text[i].length) {
//         a = text[i].length;
//         longestWord = text[i]
//     }
// }
// console.log(`${longestWord} - ${a} letters`);


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
