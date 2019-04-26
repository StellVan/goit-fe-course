'use strict'

// const colors = [
//     "#FFFFFF",
//     "#2196F3",
//     "#4CAF50",
//     "#FF9800",
//     "#009688",
//     "#795548"
// ];

// let Start = document.querySelector('.Start')
// let Stop = document.querySelector('.Stop')
// let body = document.querySelector('body')
// let onStart = null

// Start.addEventListener("click", () => {
//     if (Start.disabled === false) {
//         onStart = setInterval(() => {
//             let col = Math.floor(Math.random()*colors.length)
//             body.style.backgroundColor = colors[col]
//         }, 1000)
//         Start.disabled = true
//     } else {

//     }
// })
// Stop.addEventListener("click", () =>{
//     clearInterval(onStart)
//     Start.disabled = false
// })





function getFormattedTime(time) {
    let result
    const options = {
        minute: "2-digit",
        second: "2-digit",
    }
    const date = new Date(time)
    let local = date.toLocaleString('Uk-uk', options)
    return result = `${local}.${parseInt(date.getMilliseconds() / 100)}`
  }

//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2

function timer1() {
    const clockface = document.querySelector(".js-clockface");
    const startBtn = document.querySelector(".js-timer-start");
    const stopBtn = document.querySelector(".js-timer-stop");
    let interval
    
    startBtn.addEventListener('click', () => {
        startBtn.disabled = true
        startBtn.classList.add("active")
        stopBtn.classList.remove("active")
    
        let dateNow = Date.now()
        interval = setInterval(() => {
            let dateStart = new Date(new Date() - dateNow) 
            let int = dateStart.getTime()
            clockface.innerHTML = getFormattedTime(int)
        }, 100)
    })
    
    stopBtn.addEventListener('click', () => {
        startBtn.disabled = false
        startBtn.classList.remove('active')
        stopBtn.classList.add("active")
    
        clearInterval(interval)
    }) 
}
timer1()







const time = document.querySelector(".time");
const startBtn = document.querySelector(".js-start");
const resetBtn = document.querySelector(".js-reset");
const lapBtn = document.querySelector(".js-take-lap");
let interval 
startBtn.addEventListener('click', () => {
    startBtn.disabled = true
    startBtn.classList.add("active")
    resetBtn.classList.remove("active")

    let dateNow = Date.now()
    interval = setInterval(() => {
        let dateStart = new Date(new Date() - dateNow) 
        let int = dateStart.getTime()
        time.innerHTML = getFormattedTime(int)
    }, 100)
})

resetBtn.addEventListener('click', () => {
    startBtn.disabled = false
    startBtn.classList.remove('active')
    resetBtn.classList.add("active")

    clearInterval(interval)
})



// const DELAY = 500;
// const quantity = 100;

// function processOrder(value) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof value !== "number") {
//                 reject("Некорректный ввод!")
//             } else if (value > quantity) {
//                 resolve("К сожалению на складе недостаточно товаров!")
//             } else {
//                 resolve("Ваш заказ готов!")
//             }
//         }, DELAY)
//     })
//     return promise
// }
// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(500)
//   .then(console.log) // К сожалению на складе недостаточно товаров!
//   .catch(console.log);

// processOrder("lorem")
//   .then(console.log)
//   .catch(console.log); // Некорректный ввод!


