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
