'use strict'

// const a = function (a, b) {
//     console.log(a ** b);
// }

// function b (a, b) {
//     console.log(a ** b);
// }

// a(2, 4)
// b(3, 4)


// function fn(b) {
//     return b % 2 ===  0;
// }

// function fn2(b) {
//     if(fn(b)) {
//     alert("OK")
//     } else {
//         alert("no")
//     }
// }

// fn2(3);

// const fn = (a, b) => a + b;

// console.log(fn(3, 3))

// task 1

// let arr = []

// for (let i = 0; i < 10; i++) {
//     arr.push("x")
// }

// console.log(arr);

// task 2

// let arr = []

// for (let i = 0; i < 10; i++) {
//     arr.push(i + 1)
// }

// console.log(arr);

// task 3

// let a = ("123456");
// let arr = [];
// let temp;

// arr = a.split("");
// for (let i = 0; i < arr.length; i+=1) {
//     if (arr[i] % 2 != 0) {

//         temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = temp

//         i++
//     } else {

//     }
// }
// console.log(arr);

// task 4

// let n;

// function isNumberInRange(n) {
//     n = +prompt('Enter')
//     if (n > 0 && n < 10) {
//         alert('true')
//     } else {
//         alert('false')
//     }
// }

// isNumberInRange(n)

// task 5


// function isEven(n) {
//     if (n % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// task 6

// let arr1 = []
// let arr2 = []
// for (let i = 0; i < 5; i++) {
//     let a = prompt('Enter')
//     arr1.push(a)   
//     if (isEven(a) === true) {
//         arr2.push(a)
//     }
// }
// console.log(arr1);
// console.log(arr2);

// task 7

// let str ='abcde abcde abcde';
// let newArr = [];

// function ucfirst(n) {
//     return n.charAt(0).toUpperCase() + n.slice(1)
// }

// newArr = str.split(' ')
// for (let i = 0; i < newArr.length; i++) {
//     newArr[i] = ucfirst(newArr[i]);
// }
// console.log(newArr);

// task 8

// let arr = ['банан', 'яблоко', 'персик'];
// let str = 'яблоко';

// function inArray(str, arr) {
//     if (arr.includes(str)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(inArray(str, arr));

// task 9

// let arr = []
// function getDivisors(n) {
//     for (let i = 0; i <= n; i++) {
//         if (n % i === 0) {
//             arr.push(i)
//         }
//     }
// }
// getDivisors()
// console.log(arr);

// task 10

// function checkNumberType(num) {
//     if (num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }
// checkNumberType()

// task 11

// let arr1 = []
// let a
// function formatString(str) {
//     arr1 = str.split("")
//     if (arr1.length > 40) {
//         arr1.length = 40
//         arr1.push("...")
//         str = arr1.join("")
//         console.log(str);
//     } else {
//         str = arr1.join("")
//         console.log(str);
//     }
// }
// formatString()

// task 12

// let spamArr = ["spam", "sale"]
// let arr = [];
// let result;
// function checkForSpam (str) {
//     arr = str.split(" ")
//     for (let i = 0; i <= spamArr.length; i++) {
//         if (arr.includes(spamArr[i])) {
//             result = true;
//             break;
//         } else {
//             result = false;
//         }
//     }
//     return result;
// }
// console.log(checkForSpam());

// task 13

// let num;
// function getPx(str){
//     if (typeof str !== "string") {
//         return null
//     } else {
//         return parseFloat(str)
//     }
// }
// console.log( getPx("10px") === 10 ); // true
// console.log( getPx("10.5") === 10.5 ); // true
// console.log( getPx("0") === 0 ); // true
// console.log( getPx(-1) ); // null
// console.log( getPx(10) ); // null

// task 14

