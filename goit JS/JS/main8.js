// let btn = document.querySelector('.btn')
// let i = 1;
// function showClick() {
//     console.log(`${i}`);
//     i++
// }
// btn.addEventListener("click", showClick)

// const About = {
//     name: 'Maksim',
//     showName(){
//         console.log(this.name);
//     }
// }
// btn.addEventListener('click', About.showName.bind(About))

// let one = document.querySelector('.one')
// let two = document.querySelector('.two')
// let three = document.querySelector('.three')

// function one() {
    
// }
// function two() {
    
// }
// function three(event) {
    // event.stopPropagation()
    // alert("three")
// }


// let nav = document.querySelector('.nav')

// function catchBtn(event) {
//     event.preventDefault()
//     const target = event.target;
//     if (target.nodeName !== 'A') {
//         console.log('!!!!!!!!!');
//     } else {
//         console.log(target);
//     }
// }

// nav.addEventListener("click", catchBtn)

// let numberBtn = document.querySelector('.numberBtn')
// let i = 0;
// function plus() {
//     i++
//     numberBtn.textContent = i;
// }
// numberBtn.addEventListener("click", plus)


// let btnplus = document.querySelector('.btnplus')
// let btnminus = document.querySelector('.btnminus')
// let ex = document.querySelectorAll('.expression > input')
// let result = document.querySelector('.result')
// function plus() {
//     let a = Number(ex[0].value)
//     let b = Number(ex[1].value)
//     result.textContent = a + b;
// }
// function minus() {
//     let a = Number(ex[0].value)
//     let b = Number(ex[1].value)
//     result.textContent = a - b;
// }
// btnplus.addEventListener('click', plus)
// btnminus.addEventListener('click', minus)


// let ex = document.querySelectorAll('.btn')
// let value = document.querySelector('.value')

// let btnminus = ex[0]
// let btnplus = ex[1]

// function btnminus2() {
//     value.textContent--
// }
// function btnplus2() {
//     value.textContent++
// }

// btnplus.addEventListener('click', btnplus2)
// btnminus.addEventListener('click', btnminus2)

// let btn = document.querySelector('.btn')

// function radioB(event) {
//     event.preventDefault()
//     let result = document.querySelector('.result')
//     let options = document.querySelectorAll('.question-form input')
//     result.textContent = 'Result: '
//     options.forEach(el => el.checked ? result.textContent += el.value : '');
// }

// btn.addEventListener("click", radioB)   



// let images = document.querySelector('.images')

// function click() {
//     alert(event.target.src);  
// }
// images.addEventListener("click", click)



// let list = document.querySelector('.list')

// function del(event) {
//     if (event.target.nodeName === "BUTTON") {
//         event.target.parentNode.remove()
//     }
// }
// list.addEventListener("click", del)




// let list = document.querySelector('.input-list')
// function check(event) {
//     if (event.target.value.length > event.target.dataset.length) {
//         event.target.classList.add("invalid");
//         event.target.classList.remove("valid");
//     } else if (event.target.value.length > 0) {
//         event.target.classList.add("valid");
//         event.target.classList.remove("invalid");
//     } else {
//         event.target.classList.remove("invalid");
//         event.target.classList.remove("valid");
//     }
// }

// list.addEventListener("focusout", check)



// let message = document.querySelector('.message')
// let input = document.querySelector('.input')
// let inputValue = document.querySelector('.input-value')
// let a = inputValue.textContent

// function focus() {
//     message.textContent = "Input is in focus!"
// }
// function unfocus() {
//     message.textContent = ""
// }
// function textInput() {
//     inputValue.innerHTML = `${a} ${input.value}`
// }

// addEventListener("focusin", focus)
// addEventListener("focusout", unfocus)
// addEventListener("input", textInput)



// let btnClose = document.querySelector('.close-btn')
// let btnOpen = document.querySelector('.btn')
// let modal = document.querySelector('.modal')

// function closeBtn(event) {
//     if (event.target == modal || event.target == btnClose) {
//         modal.classList.add('modal-hidden')
//     }
// }
// function openBtn() {
//     modal.classList.remove('modal-hidden')
// }

// btnOpen.addEventListener("click", openBtn)
// modal.addEventListener("click", closeBtn)



// let a = document.querySelectorAll('.menu-item > a')
// let butt = document.querySelector('.menu-item')
// let menu = document.querySelector('.menu')

// function click(event) {
//     if (event.target.nodeName === "A") {
//         a.forEach(el => el.classList.remove('active'))
//         event.target.classList.add('active')
//     }
// }   

// menu.addEventListener('click', click)

