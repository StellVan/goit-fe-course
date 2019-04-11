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

// let a = 0;
// let longestWord;
// let text;
// function findLongestWord(str) {
//     text = str.split(" ");
//     for (let i = 0; i < text.length; i++) {
//         if (a < text[i].length) {
//             a = text[i].length;
//             longestWord = text[i];
//         }
//     }
//     return longestWord
// }
// console.log(findLongestWord("May the force be with you"));

// task 15

// let a = 0;
// function findLargestNumber(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (a < numbers[i]) {
//             a = numbers[i]
//         }
//     }
//     return a;
// }
//   console.log(
//     findLargestNumber([1, 2, 3])
//   ); // 3
  
//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // 27
  
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // 128

// task 16

// const uniqueNumbers = [2, 1, 4, 9];
// let num;
// function addUniqueNumbers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueNumbers.includes(arr[i])) {
//             uniqueNumbers.push(arr[i])
//         }
//     }
//     return uniqueNumbers
// }
// addUniqueNumbers([1, 2, 3]);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// task 17

// function filterFromArray(arr, ...arg) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!arg.includes(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// // Вызовы функции для проверки
// console.log(
//     filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//     filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]





/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
  Добавляемый логин должен:
    - проходить проверку на длину от 4 до 16-ти символов включительно
    - быть уникален, то есть отсутствовать в массиве logins
 
  🔔 Разбейте задачу на подзадачи с помощью функций.
  
  Напишите функцию isLoginValid(login), в которой проверьте количество символов 
  параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
  в заданный диапазон от 4-х до 16-ти символов включительно.
 
  Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список 
  всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
  если такого логина еще нет и false если логин уже используется.
  Далее напишите функцию addLogin(allLogins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
    - Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
  🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
     позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
     не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
     false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
      - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
      - isLoginValid только проверяет валидный ли логин и возвращает true или false.
      - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
        используются результаты вызовов других функций - isLoginUnique и isLoginValid.
*/

// let login = prompt("Enter your login");

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// function isLoginValid (login) {
//     if (login.length >= 4 && login.length <= 16 ) {
//         return true
//     } else {
//         return false
//     }
// };

// function isLoginUnique (logins, login) {
//     if (logins.includes(login)) {
//         return false
//     } else {
//         return true
//     }
// };

// function addLogin(logins, login) {
//     if (isLoginValid (login) === false) {
//         console.log('Ошибка! Логин должен быть от 4 до 16 символов');       
//     } else if (isLoginUnique (logins, login) === false) {
//         console.log('Такой логин уже используется!');
//     } else if (isLoginValid (login) === true && isLoginUnique (logins, login) === true){
//         logins.push(login)
//         console.log('Логин успешно добавлен!');
//     }
// };

// // Вызовы функции для проверки
// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'



















