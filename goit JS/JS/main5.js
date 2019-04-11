'use strict'

// const numbers = [1 ,2 ,3 , 4, 5 ]

// const mass = []
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] *2);
    
// }

// console.log(mass);

// console.log(numbers.forEach(el => console.log(el *el)));

// const map = numbers.map(function(el, ind, arr) {
//     return el*2
// })
// console.log(map);


// const users = [
//     { name: "Mango", daysInactive: 10, isActive: true },
//     { name: "Poly", daysInactive: 5, isActive: false },
//     { name: "Ajax", daysInactive: 12, isActive: true }
//   ];

// const showUsers = users.map(el => ({...el, isActive: el.daysInactive < 7 })) 

// console.log(showUsers);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// const filter = numbers.filter(el => el === 6)

// console.log(numbers);
// console.log(filter);

// const users = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true },
//     { name: "Chelsey", isActive: false }
//   ];

// const findUsers = users.filter(el => !el.isActive).map(el => el.name).sort()

// console.log(findUsers);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// const find = numbers.find(el => el > 2)

// console.log(find);

// const users = [
//     { id: "000", name: "Mango", isActive: true },
//     { id: "001", name: "Poly", isActive: false },
//     { id: "002", name: "Ajax", isActive: true },
//     { id: "003", name: "Chelsey", isActive: false }
// ];

// const find = users.find(el => el.id === '003')
// for (const key in find) {
//     console.log(find[key]);
//     if(key === name) {
//     }
// }
// console.log(name);

// function find(arr, id) {
//     let newArr = arr.find(el => el.id === id)
//     return newArr
// }

// console.log(find(users, "003"));

// function some(el) {
//     return el > 3;
// }

// console.log([1, 2, 3, 4, 5].every(some))

// const numbers = [1, 2, 3, 4, 5]

// let result = 0;
// for (const key of numbers) {
//     result += key
// }

// console.log(result);

// const showResult = numbers.reduce((acc, el) => acc+=el)

// console.log(showResult);

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }
// ];







//========================== task 01 =====================

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan принимает два параметра - число и массив. 1 -----------------------
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => {
//     const result = [];
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       if (arr[i] > num) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
// };

    // function findGreaterThan(num, arr) {
    //     console.log(num);
    //     let filter = arr.filter(el => el > num)
    //     return filter
    // }

    // console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
    // console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
    // console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
  
//   /* 
//     Функция multiplyBy принимает два параметра - число и массив. 2 --------------------------------
//     Возвращает массив все значения которого умножены на число.
//   */
//   const multiplyBy = (num, arr) => {
//     let result = [];
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       result.push(arr[i] * num);
//     }
//     return result;
//   };

// function multiplyBy(num, arr){
//     console.log(num);
//     const result = arr.map(el => el * num)
//     return result
// };

// console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
// console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

//   /* 
//     Функция summAllNumbers принимает любое число аргументов. 3 ------------------------------
//     Возвращает число - сумму всех аргументов.
//   */

    // function summAllNumbers(...args) {
    //     let accumulator = 0;
    //     for (let i = 0, max = args.length; i < max; i += 1) {
    //     accumulator += args[i];
    //     }
    //     return accumulator;
    // }
    
    // function summAllNumbers(...args) {
    //     const accumulator = args.reduce((acc, el) => acc += el, 0)
    //     return accumulator;
    // }

    // console.log( summAllNumbers(1, 2, 3) ); // 6
    // console.log( summAllNumbers(1, 2, 3, 4) ); // 10
    // console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
  
//   /* 
//     Функция findEvery получает два аргумента - число и массив. 4 ---------------------------------
//     Возвращает true если все элементы массива больше или равны числу.
//     Иначе если есть хоть один элемент меньше числа, то возвращается false.
//   */

//   const findEvery = (num, arr) => {
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       if (arr[i] < num) {
//         return false;
//       }
//     }
//     return true;
//   };
    
    // function findEvery(num, arr) {
    //     const every = arr.every(el => el >= num)
    //     return every
    // }

    // console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
    // console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
    // console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true
  

// //========================== task 02 =====================

// /*
//   Напиши функию getPropValues(arr, prop), принимающую 5 ------------------------------
//   параметры arr - массив, и prop - имя ключа в объекте. 
  
//   Функция должна возвращать массив всех значений этого ключа из arr.
  
//   PS: обязательно использу перебирающие методы массивов, никаких for!
// */

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];

//     function getPropValues(arr, prop) {
//     const map = arr.map(el => el[prop])
//         return map
//     }

    
//     // Вызовы функции для проверки
//     console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
//     console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
//     console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
  

// //========================== task 03 =====================

// /*      
//   Напиши функцию setGuestState(guests, period), где 6-------------------------------
//   guests - массив гостей, period - кол-во дней после
//   которого считается что гость не активен.
    
//   Если значение поля inactiveDays болше чем period, 
//   поставить для isActive значение false.
    
//   Если же значение inactiveDays меньше чем period,
//   поставить для isActive значение true
  
//   PS: обязательно используй перебирающие методы массивов, никаких for!
// */

    // const guests = [
    //     { name: 'Mango', inactiveDays: 15, isActive: true },
    //     { name: 'Poly', inactiveDays: 8, isActive: false },
    //     { name: 'Ajax', inactiveDays: 32, isActive: false },
    //     { name: 'Chelsey', inactiveDays: 85, isActive: true }
    // ];

    // function setGuestState(guests, period) {
    //     const user = guests.map(el =>({...el, isActive: el.inactiveDays < period}))
    //     return user
    // }

    // // Вызовы функции для проверки
    // console.log(
    //     setGuestState(guests, 10)
    // ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
    
    // console.log(
    //     setGuestState(guests, 20)
    // ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
    
    // console.log(
    //     setGuestState(guests, 50)
    // ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

// //========================== task 04 =====================

// /*
//   Напиши функию getActiveGuests(guests), принимающую массив объектов гостей. 7---------------------------
  
//   Функция должна возвращать массив объектов гостей, значение поля isActive которых true.
         
//   PS: обязательно используй перебирающие методы массивов, никаких for!
// */

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
  
//   function getActiveGuests(guests) {
//       const filter = guests.filter(el => el.isActive)
//       return filter
//   }
//   // Вызовы функции для проверки
//   console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
  

// //========================== task 05 =====================

// /*      
//   Напиши функцию getGuestsOlderThan(guests, age), где 8 -------------------------------------------
//   guests - массив объектов гостей, age - предел возраста для сортировки. 
  
//   Функция возвращает массив объектов значение свойства age которых больше чем параметр age.
  
//   PS: обязательно используй перебирающие методы массивов, никаких for!
// */

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

//   function getGuestsOlderThan(guests, age) {
//       const filter = guests.filter(el => el.age > age)
//       return filter
//   }

//   // Вызовы функции для проверки
//   console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
  
//   console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
  
//   console.log(getGuestsOlderThan(guests, 55)); // []
  

// //========================== task 06 =====================

// /*
//   Напишите функию findGuestById(guests, id), принимающую 9 --------------------------------
//   guests - массив объектов гостей, id - идентификатор (число). 
  
//   Функция должна возвращать объект гостя с совпадающим id.
  
//   PS: обязательно используй перебирающие методы массивов, никаких for!
// */

// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
//   ];

//   function findGuestById(guests, id) {
//     const find = guests.find(el => el.id === id)
//     return find
//   }
  
//   // Вызовы функции для проверки
//   console.log(
//     findGuestById(guests, 3)
//   ); // {id: 3, name: 'Ajax', age: 30}

//   console.log(
//     findGuestById(guests, 1)
//   ); // {id: 1, name: 'Mango', age: 20}
  
//   console.log(
//     findGuestById(guests, 5)
//   ); // undefined

// //========================== task 07 =====================

// /*
// * Напиши функцию getTotal(order), которая получает обьект заказа с продуктами и их ценой.
// * Функция возвращает число - общую стоимость заказа.
// * 
// * Используй метод reduce.
// */

// function getTotal(order) {
//     let a = Object.values(order)
//     const total = a.reduce((acc, el) => acc + el, 0)
//     return total
// }

// console.log(getTotal({ apples: 25, chicken: 60, milk: 15 })); // 100

// console.log(getTotal({ bread: 10, apples: 25, milk: 15, cheese: 40 })); // 90

// console.log(getTotal({ bread: 10, chicken: 60, cheese: 40 })); // 110


// //========================== task 08 =====================

/*
  Напиши функцию getTotal(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  Используй метод reduce.
*/

    // const products = {
    //     bread: 10,
    //     milk: 15,
    //     apples: 20,
    //     cheese: 30,
    //     chicken: 40
    // };
    
    // const orderA = {
    //     bread: 2,
    //     apples: 4,
    //     chicken: 1
    // };
    
    // const orderB = {
    //     bread: 1,
    //     milk: 2,
    //     cheese: 2,
    //     apples: 1
    // };
    
    // const orderC = {
    //     bread: 2,
    //     cheese: 2
    // };
    
    // function getTotal(products, order) {
    //     const a = Object.keys(order) 
    //     const reduce = a.reduce((acc, el) => acc+= order[el] * products[el], 0)
    //     return reduce
    // }

    // // Вызовы функции для проверки
    // console.log(getTotal(products, orderA)); // 140
    // console.log(getTotal(products, orderB)); // 120
    // console.log(getTotal(products, orderC)); // 80
  

// //========================== task 09 =====================

/*     
* Напиши функию isGuestsActive(guests), принимающую массив объектов гостей. 
* Функция возвращает true если значение поля active всех объектов true, в противном случае false.
* 
* Используй метод every или some, никаких for!
*/

// Вызовы функции для проверки

// function isGuestsActive(guests) {
//     return guests.every(el => el.active === true)
// }

// console.log(
//     isGuestsActive([
//       { name: "Mango", active: true },
//       { name: "Poly", active: false },
//       { name: "Ajax", active: true }
//     ])
//   ); // false
  
//   console.log(
//     isGuestsActive([
//       { name: "Mango", active: true },
//       { name: "Poly", active: true },
//       { name: "Ajax", active: true }
//     ])
//   ); // true
  
//   console.log(
//     isGuestsActive([
//       { name: "Mango", active: true },
//       { name: "Poly", active: true },
//       { name: "Ajax", active: false }
//     ])
//   ); // false
  

//========================== ****** task ***** =====================

// const scientist = [{
//   first: 'Albert',
//   last: 'Einstein',
//   year: 1879,
//   passed: 1955
// },
// {
//   first: 'Isaac',
//   last: 'Newton',
//   year: 1643,
//   passed: 1727
// },
// {
//   first: 'Galileo',
//   last: 'Galilei',
//   year: 1564,
//   passed: 1642
// },
// {
//   first: 'Marie',
//   last: 'Curie',
//   year: 1867,
//   passed: 1934
// },
// {
//   first: 'Johannes',
//   last: 'Kepler',
//   year: 1571,
//   passed: 1630
// },
// {
//   first: 'Nicolaus',
//   last: 'Copernicus',
//   year: 1473,
//   passed: 1543
// },
// {
//   first: 'Max',
//   last: 'Planck',
//   year: 1858,
//   passed: 1947
// },
// {
//   first: 'Katherine',
//   last: 'Blodgett',
//   year: 1898,
//   passed: 1979
// },
// {
//   first: 'Ada',
//   last: 'Lovelace',
//   year: 1815,
//   passed: 1852
// },
// {
//   first: 'Sarah E.',
//   last: 'Goode',
//   year: 1855,
//   passed: 1905
// },
// {
//   first: 'Lise',
//   last: 'Meitner',
//   year: 1878,
//   passed: 1968
// },
// {
//   first: 'Hanna',
//   last: 'Hammarström',
//   year: 1829,
//   passed: 1909
// }
// ];

// function century(a) {
//   return a.filter(el => el.year > 1799 && el.year < 1900)
// }
// console.log(century(scientist));

// function ageSum(a) {
//   return a.reduce((acc, el) => acc + (el.passed - el.year), 0)
// }
// console.log(ageSum(scientist));

// function alphabetSort(a) {
//   return a.sort((a,b)=>(a.first > b.first) ? 1 : -1);
// }
// console.log(alphabetSort(scientist));

// function bornSort(a) {
//   return a.sort((a,b)=>(a.year > b.year) ? 1 : -1);
// }
// console.log(bornSort(scientist));

// function yearsSort(a) {
//   return a.sort((a,b)=>(a.passed-a.year)>(b.passed-b.year)? 1 : -1);
// }
// console.log(yearsSort(scientist));

// function remove(a) {
//   return a.filter(el => el.year > 1499 && el.year > 1599 && el.year > 1699)
// }
// console.log(remove(scientist));

// function latest(a) {
//   return a.sort((a,b)=>(a.year > b.year)? -1 : 1).find(el => el)
// }
// console.log(latest(scientist));

// function nameSearch(a) {
//   return a.filter(el => el.first === "Albert" && el.last === "Einstein").map(el => el.year)
// }
// console.log(nameSearch(scientist));

// function surnameSearch(a) {
//   return a.filter(el => el.last.charAt() === "C")
// }
// console.log(surnameSearch(scientist));

// function surnameSearch(a) {
//   return a.filter(el => el.first.charAt() !== "A")
// }
// console.log(surnameSearch(scientist));
// 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який народився найпізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A





//========================== HOMEWORK =====================

/*
* Используя массив (users) объектов пользователей, напишите функции которые с помощью 
* функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
*/
const users = [
{
  id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
  name: 'Moore Hensley',
  email: 'moorehensley@indexia.com',
  eyeColor: 'blue',
  phone: '+1 (848) 556-2344',
  friends: ['Sharron Pace'],
  isActive: false,
  balance: 2811,
  skills: ['ipsum', 'lorem'],
  gender: 'male',
  age: 37,
},
{
  id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
  name: 'Sharlene Bush',
  email: 'sharlenebush@tubesys.com',
  eyeColor: 'blue',
  phone: '+1 (855) 582-2464',
  friends: ['Briana Decker', 'Sharron Pace'],
  isActive: true,
  balance: 3821,
  skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
  gender: 'female',
  age: 34,
},
{
  id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
  name: 'Ross Vazquez',
  email: 'rossvazquez@xinware.com',
  eyeColor: 'green',
  phone: '+1 (814) 593-3825',
  friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  isActive: false,
  balance: 3793,
  skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
  gender: 'male',
  age: 24,
},
{
  id: '249b6175-5c30-44c6-b154-f120923736f5',
  name: 'Elma Head',
  email: 'elmahead@omatom.com',
  eyeColor: 'green',
  phone: '+1 (909) 547-2687',
  friends: ['Goldie Gentry', 'Aisha Tran'],
  isActive: true,
  balance: 2278,
  skills: ['adipisicing', 'irure', 'velit'],
  gender: 'female',
  age: 21,
},
{
  id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
  name: 'Carey Barr',
  email: 'careybarr@nurali.com',
  eyeColor: 'blue',
  phone: '+1 (956) 512-2693',
  friends: ['Jordan Sampson', 'Eddie Strong'],
  isActive: true,
  balance: 3951,
  skills: ['ex', 'culpa', 'nostrud'],
  gender: 'male',
  age: 27,
},
{
  guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
  name: 'Blackburn Dotson',
  email: 'blackburndotson@furnigeer.com',
  eyeColor: 'brown',
  phone: '+1 (876) 411-2433',
  friends: ['Jacklyn Lucas', 'Linda Chapman'],
  isActive: false,
  balance: 1498,
  skills: ['non', 'amet', 'ipsum'],
  gender: 'male',
  age: 38,
},
{
  id: 'e1bf46ab-7168-491e-925e-f01e21394812',
  name: 'Sheree Anthony',
  email: 'shereeanthony@kog.com',
  eyeColor: 'brown',
  phone: '+1 (979) 504-2554',
  friends: ['Goldie Gentry', 'Briana Decker'],
  isActive: true,
  balance: 2764,
  skills: ['lorem', 'veniam', 'culpa'],
  gender: 'female',
  age: 39,
},
];

/**
* Получить массив имен (поле name) всех пользователей
*/
function getAllNames(arr) {
  return arr.map(el => el.name)
}
console.log(getAllNames(users)); 
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
    

// /**
// * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
// */
function getUsersByEyeColor(arr, color) {
  return arr.filter(el => el.eyeColor === color)
};
console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

                                          
// /**
// * Получить массив имен пользователей по полу (поле gender)
// */
function getUsersByGender(arr, gender){
  return arr.filter(el => el.gender === gender).map(el => el.name)
};
console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// /**
// * Получить массив только неактивных пользователей (поле isActive)
// */
function getInactiveUsers(arr){
  return arr.filter(el => el.isActive === false)
}
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
                    
                               
// /**
// * Получить пользоваля (не массив) по email (поле email, он уникальный)
// */
function getUserByEmail(arr, email){
  return arr.find(el => el.email === email)
}
console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// /**
// * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
// */
function getUsersWithAge(arr, min, max){
  return arr.filter(el => el.age > min && el.age < max)
}
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]                                
console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
                               
                               
// /**
// * Получить общую сумму баланса (поле balance) всех пользователей
// */
function getTotalBalance(arr){
  return arr.reduce((acc, el) => acc + el.balance, 0)
}
console.log(getTotalBalance(users)); // 20916
                              
                             
// /**
// * Массив имен всех пользователей у которых есть друг с указанным именем
// */
function getUsersByFriend(arr, name){
  return arr.filter(el => el.friends.includes(name) === true)
}
console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


