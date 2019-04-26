let btnplus = document.querySelector('.btnplus')
let btnminus = document.querySelector('.btnminus')
let ex = document.querySelectorAll('.expression > input')
let result = document.querySelector('.result')
function plus() {
    let a = Number(ex[0].value)
    let b = Number(ex[1].value)
    result.textContent = a + b;
}
function minus() {
    let a = Number(ex[0].value)
    let b = Number(ex[1].value)
    result.textContent = a - b;
}
btnplus.addEventListener('click', plus)
btnminus.addEventListener('click', minus)
