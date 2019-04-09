'use srtict';

// 1. Зайдите в консоль своего браузера. При помощи оператора определения типа уточните тип следующих величин: «Привет», 123, true, «true».
// const hello="Привет";
// console.log(typeof hello);
// const b = 123;
// console.log(typeof b);
// const c = true;
// console.log(typeof c);
// const d = "true";
// console.log(typeof d);


// 2. Зайдите в консоль своего браузера. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений: 5 + 3, 5 — 3, 5 * 3, 5 / 3.

// let a = 5;
// let b = 3;
// let result;
// result = a+b;
// console.log (result);
// result= a-b;
// console.log (result);
// result = a*b;
// console.log (result);
// result=a/b;
// console.log (result);



// 3. Зайдите в консоль своего браузера. При помощи оператора нахождения остатка от деления %, найдите значения выражений: 5 % 3, 3 % 5.
// let a = 5;
// let b = 3;
// let result;
// result = a%b;
// console.log(result);
// result = b%a;
// console.log(result);


// 4. Зайдите в консоль своего браузера. При помощи оператора + (сложение, склеивание) найдите значения выражений: 5 + ‘3’ , ‘5’ — 3, 75 + ‘кг’.

// let a = 5 + '3';
// let b = '5' -3;
// let c = 75 + 'кг';

// console.log(a);
// console.log(b);
// console.log(c);

// 5. Создайте переменные строкового, числового и булева типов. Выведите их содержимое.
// const a = '123';
// const b = 123;
// const c = fulse;
// console.log (typeof a);


// 6. Напишите скрипт, который находит площадь прямоугольника длиной 23см., шириной 10см.
// const a = 23;
// const b = 10;
// let result;
// result = a*b;
// console.log (result);

// 7. (*) Найди двенадцатый элемент последовательности Леонардо Пизанского (нужно использовать функцию Math.pow(число, степень))
// let a = ('1,2,4,5,6,7,8,9,10,11,12,13');
// let b;
// // 1 2 3 5 8 13 21 34 55 89 144 233 

// b = Math.pow(1,12);
// console.log(b);


// 8. (*) Даны размер ипотечного кредита, процентная ставка, кол-во лет. Найти переплату по кредиту.
// let a = 20000;
// let b = 3.5;
// let c = 2;
// let d;
// let q;
// let v;
// let s;

// d = c * 12;
// q = 1 + b;
// q = Math.pow(q,b);
// v= q*b;
// s = q-1;
// q=(v/s)*a;
// console.log(`Ваша переплата по кредиту за ${c} года, при ставке ${b} % , составляет ${q} грн`);
// _________________________________
// 9) Створіть змінну num і надайте їй значення 3. Виведіть значення цієї змінної на екран за допомогою методу alert
// const num = 3;
// alert(num);
// 10) Створіть змінні a = 10 і b = 2. Виведіть на екран їх суму, різницю, добуток і частку (результат ділення)
// let a =10;
// let b =2;

// console.log (a+b);
// console.log (a-b);
// console.log (a*b);
// console.log (a/b);
// 11) Створіть змінні c = 15 і d = 2. Підсумуйте їх, а результат надайте змінної result. Виведіть на екран значення змінної result
// const c =15;
// const d =2;
// let result;
// result = c+d;
// console.log (result);
// 12) Створіть змінні a = 10, b = 2 і c = 5. Виведіть на екран їх суму.
// const a = 10;
// const b = 2;
// const c = 5;
//  let result;
//  result = a+b+c;
//  console.log(result);

// 13) Створіть змінні a = 17 і b = 10. Відніміть від a змінну b і результат надайте зміннії c. Потім створіть змінну d, надайте їй значення 7. Складіть змінні c і d, а результат запишіть в змінну result. Виведіть на екран значення змінної result.
// let a = 17;
// let b = 10;
// let c;
// c = a-b;
// let d = 7;
// let result;
// result = c + d;
// console.log(result);
// 14) Запитайте ім'я користувача за допомогою методи prompt. Виведіть за допомогою alert повідомлення 'Ваше ім'я
// %значення що отримали з prompt%'
// const name =(prompt('Your name'));
// alert(name);


// 15) Створіть три змінні - година, хвилина, секунда. З їх допомогою виведіть поточний час в форматі 'година: хвилина: секунда'.
// let hours =16;
// let minutes = 24;
// let second = 35;
// let time = `${hours} :${minutes} :${second}`;
// console.log(time);


// 16) Створіть змінну, надайте їй число. Зведіть це число в квадрат. Виведіть його на екран
// let a =10;
// console.log(Math.pow(a, 2));

// 17) Переробіть цей код так, щоб в ньому використовувалися операції + =, - =, * =, / =. Кількість рядків коду при цьому не повинно змінитися.

//   var num = 47;
//   num += 7;
//   num -= 18;
//   num *= 10;
//   num /= 15;
//   alert (num);


// 18) Створіть змінну str і надайте їй значення 'Hello World'. Виведіть значення цієї змінної на екран
// const str = 'Hello world';
// console.log (str);

// 19) Створіть змінні str1 = 'Hello,' і str2 = 'World!'. За допомогою цих змінних і операції додавання рядків виведіть на екран фразу 'Hello World'.
// const str1 = 'Hello ';
// const str2 = 'World';
// console.log(str1 + str2)

// 20) Створіть змінну name і надайте їй ваше ім'я. Створіть змінну age і надайте їй ваш вік. Виведіть на екран 'Привіт, я  % Ім'я%!'Мені% Вік% років!'.
// const name='Alex';
// const age=30;
// console.log(`Hello, my name is ${name} i'm ${age} years old`);

// 21) Створіть змінну str і надайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка виведіть на екран символ 'a', символ 'c', символ 'e'

// const str = 'abcde';
// console.log( str.charAt(0) ); 
// console.log(str.charAt(2));
// console.log(str.charAt(4));
// 22) Створіть змінну num і надайте їй значення '12345'. Знайдіть суму, різницю, добуток, частку цифр цього числа
// і виведіть ці значення в консоль
// let num = '12345';

// let b;
// b = Number(num);
// console.log(typeof(b));
// num = num.split("");
// console.log(num);
// num = ([0]+[1]+[2]+[3]+[4]);
// console.log('summ', num);
// console.log(num);
// const num = Number(prompt('enter'));
// const isValidNumber =!Number;
// console.log(isValidNumber);

// // const a = 3;
// // if( a > 0 && a < 5 ){
// //     alert('true');
// // } else {
// //     alert(false);
// // }

// // const a = 0;
// // if (a === 0 || a === 2) {
// //     console.log(a + 7);
// // } else {
// //     console.log(a / 10);
// // }

// let day;
// let number = +prompt('Enter number');

// // if (number === 1) {
// //     day = 'Monday'
// //     alert('Monday')
// // } else if (number === 2) {
// //     day = 'Thusday'
// //     alert('Thusday')
// // }

// switch (number) {
//     case 1:
//     alert('Monday');
//     break;
//     case 2:
//     alert('Thusday');
//     case 3:
//     alert('Wednesday');
//     default:
//     console.error('error');
// }









// =============================================================== //

// let a = +prompt('Enter');
// if(a === 0){
//     alert('true');
// } else {
//     alert('false');
// }

// let a = +prompt('Enter');
// if(a > 0){
//     alert('true');
// } else {
//     alert('false');
// }

// let a = +prompt('Enter');
// if(a < 0){
//     alert('true');
// } else {
//     alert('false');
// }

// let a = +prompt('Enter');
// if(a >= 0){
//     alert('true');
// } else {
//     alert('false');
// }

// let a = +prompt('Enter');
// if(a <= 0){
//     alert('true');
// } else {
//     alert('false');
// }

// let a = +prompt('Enter');
// if(a !== 0){
//     alert('true');
// } else {
//     alert('false');
// }

// let a = prompt('Enter');
// if(a === 'test'){
//     alert('true');
// } else {
//     alert('false');
// }

// let a = +prompt('Enter');
// if(a === 1){
//     alert('true');
// } else {
//     alert('false');
// }

// =================================================================== //

// let a = +prompt('Enter');
// if(a > 0 && a < 5){
//     alert('true');
// } else {
//     alert('false');
// }

// let a = +prompt('Enter');
// if (a === 0 || a === 2) {
//     alert(a + 7);
// } else {
//     alert(a / 10);
// }

// let a = +prompt('Enter A');
// let b = +prompt('Enter B');
// if ((a <= 1) && (b >= 3)) {
//     alert(a + b)
// } else {
//     alert(a - b)
// }

// let a = +prompt('Enter A');
// let b = +prompt('Enter B');
// if ((a > 2 && a < 11) && (b >= 6 && b < 14)) {
//     alert(true)
// } else {
//     alert(false)
// }

// ========================================================== //

// task 1

// let name = 'Генератор защитного поля';
// let price = 1000;
// price = 2000;

// alert(`Выбран ${name}, цена за штуку ${price} кредитов`)

// task 2

// let a = +prompt('Enter')
// if (a === 10){
//     alert(true)
// } else {
//     alert(false)
// }

// task 3

// let a = Math.floor(Math.random() * Math.floor(60));
// if(a >= 0 && a < 15) {
//     alert(a + ` is in a first quarter`)
// } else if (a >= 15 && a < 30) {
//     alert(a + ` is in a second quarter`)
// } else if (a >= 30 && a < 45) {
//     alert(a + ` is in a third quarter`)
// } else if (a >= 45 && a < 60) {
//     alert(a + ` is in a fourth quarter`)
// }

// task 4

// const day = 17;
// const month = 10;
// const year = 2048;

// let date = day + "/" + month + "/" + year;
// let message = "Доброе утро, cегодня " + date + ", за бортом отличная погода!";

// alert(date);
// alert(message);

// task 5

// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';

// let message = name + " прибывает на отдых " + date + " в " + roomType;
// alert(message);

//task 6

// const correctPassword = 'jqueryismyjam';

// let password = prompt('Введите пароль доступа');
// do {
//     if (password === null){
//         alert("Ожидаю ввода пароля");
//         password = prompt('Введите пароль доступа');
//     }
// } while (password === null);
// if (password === correctPassword) {
//     alert("Доступ в секретный бункер разрешен!")
// } else {
//     alert("Активирована система защиты!")
// }

// task 7

// const total = 100;
// let ordered = prompt('Enter');
// if (ordered > total){
//     alert('На складе недостаточно товаров!');
// } else if (ordered == total){
//     alert('Вы забираете весь товар cо склада!');
// } else {
//     alert('Заказ оформлен, с вами свяжется менеджер');
// }

// task 8

// let a = prompt('Введите произвольное целое число');
// if (a === null) {
//     alert('Ну и ладно, пока!');
// } else if (a % 1 === 0) {
//     alert('Спасибо!')
// } if (a % 1 !== 0) {
//     do {
//         alert('Необходимо было ввести целое число!');
//         a = prompt('Введите произвольное целое число');
//     } while (a % 1 !== 0) {
//         alert('Ну и ладно, пока!');
//     }
// }

// task 9

// let value = Math.floor(Math.random() * Math.floor(100));
// let type

// if (value % 2 === 0) {
//     type = "even";
// } else {
//     type = "odd";
// }
// alert(`${value} is ${type}`);

// task 10

// let a = prompt('Enter')

// if (a === null){
//     alert('Очень жаль, приходите еще!')
// } 
//        else if ((a < 1 || a > 5) && a !== null ){
//         do {
//            alert('Неверный ввод, возможные варианты 1-5!')
//            a = prompt('Enter')
//         } while ((a < 1 || a > 5) && a !== null ) {
//     switch (a) {
//         case "1":
//         alert("Каталог хостелов");
//         break;
//         case "2":
//         alert("Каталог бюджетных отелей");
//         break;
//         case "3":
//         alert("Каталог отелей ***");
//         break;
//         case "4":
//         alert("Каталог отелей ****");
//         break;
//         case "5":
//         alert("Каталог лучших отелей");
//         break;
//         }
//     }
// }

// task 11

// let country = prompt('Country');
// let cost;
// let k;
// do {
//     switch (country) {
//         case ('Китай'):
//         cost = 100;
//         k = 1;
//         break
        
//         case ('Южная Америка'):
//         cost = 110;
//         k = 1;
//         break
        
//         case ('Австралия'):
//         cost = 120;
//         k = 1;
//         break
        
//         case ('Индия'):
//         cost = 130;
//         k = 1;
//         break
        
//         case ('Ямайка'):
//         cost = 140;
//         k = 1;
//         break
        
//         default:
//         k = 0;
//         break
//     }
// } while (cost > 0)
// if (k == 1) {
//     alert("Доставка в "+ country + " будет стоить " + cost + " кредитов")
// } else {
//     alert("В вашей стране доставка не доступна")
// }

// task 12

// let hotel = prompt("Enter");
// const sharm = 15;
// const hurgada = 25;
// const taba = 6;
// let name = '';
// let question;

// if (hotel !== null) {

//     if (hotel % 1 === 0 && hotel > 0) {

//         if(hotel <= hurgada){

//             if (hotel <= taba) {
//                 name = "taba";
//             } else if (hotel <= sharm) {
//                 name = "sharm"
//             } else {
//                 name = "hurgada"
//             }
        
//         } else {
//             alert('Извините, столько мест нет ни в одной группе!');
//         }
//         question = confirm('Согласны ли вы на группу ' + name + '?');
            
//         switch (question) {
//             case true:
//             alert('Приятного путешествия в группе ' + name);
//             break
            
//             case false:
//             alert('Нам очень жаль, приходите еще!');
//             break
//         }
        
//     } else {
//         alert("Ошибка ввода");
//     }

// } else {
//     alert("Нам очень жаль, приходите еще!");
// }


































