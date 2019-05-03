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



const galleryItems = [
    { preview: 'images/one.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
    { preview: 'images/two.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
    { preview: 'images/three.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
    { preview: 'images/for.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
    { preview: 'images/five.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
    { preview: 'images/two.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
    { preview: 'images/two.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
    { preview: 'images/two.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
    { preview: 'images/two.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
    { preview: 'images/two.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
    { preview: 'images/five.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
    { preview: 'images/two.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
  ];

const previewLi = document.querySelectorAll(".preview img")
const preview = document.querySelector(".preview")
const fullview = document.querySelector(".fullview")
const arrowL = document.querySelector(".arrowL")
const arrowR = document.querySelector(".arrowR")
let i
let bigImg
function aaa(mass) {
    fullview.innerHTML = `<img class="bigImg" src="${mass[0].preview}" width="800" height="500" alt="${mass[0].alt}1">`
    for (i = 0; i < mass.length; i++) {
        preview.innerHTML += `<li><img src="${mass[i].preview}" width="200" height="120" data-fullview="${mass[i].fullview}" alt="${mass[i].alt} data-index-number="${i}"></li>`
    }

    preview.addEventListener('mousedown', (event) => {
        bigImg = document.querySelector(".bigImg")
        if (event.target != preview) {
            bigImg.setAttribute("src", event.target.src)
            console.log(event.target.classList.ge);
        }
    })
    
    preview.addEventListener('mouseup', (event) => {
        if (event.target != preview) {
            event.target.classList.remove("active")
            console.log(mass.indexOf(event.target));
        }
    })
    arrowL.addEventListener('mousedown', () => {
        arrowL.classList.add("activeB")
    })
    arrowL.addEventListener('mouseup', () => {
        arrowL.classList.remove("activeB")
    })
    arrowR.addEventListener('mousedown', () => {
        arrowR.classList.add("activeB")
    })
    arrowR.addEventListener('mouseup', () => {
        arrowR.classList.remove("activeB")
    })
}

aaa(galleryItems)
