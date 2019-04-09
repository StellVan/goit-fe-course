'use srtict';
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


































