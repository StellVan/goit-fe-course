'use strict'

// let text = document.getElementById('text');
// let doubleText = document.getElementsByClassName('doubleText');
// text.style.color = 'red';

// console.log(doubleText);
// console.log(text);

// let div = document.querySelector('div')
// console.log(div);

// let list = document.querySelector('.list')

// function fn(el) {
//     let newMass = [...el].map(el => el.textContent);
//     return newMass
// }

// let copyMass = fn(list.children);

// console.log(copyMass);

// const element = document.createElement('ul')
// const body = document.body;

// body.append(element);

// let getli = copyMass.reduce((string, el) => string + `<li>${el}</li>`, '')

// element.innerHTML = getli

// let text = document.querySelector('.text')
// let input = document.querySelector('.input')
// let btn = document.querySelector('.btn')

// console.log(btn);

// btn.onclick = function(){
//         text.textContent = input.value
//         text.style.color = 'red'
//         console.log(input.value);
//         input.value = ''
// }

// let forward = document.querySelector('.forward')

// let backward = document.querySelector('.backward')

// let images = document.querySelectorAll('.images img')

// let i = 0

// forward.onclick = function() {
//     images[i].className = ''
//     i++
//     if (i >= images.length) {
//         i = 0
//     }    images[i].className = 'showed'
// }

// backward.onclick = function() {
//     images[i].className = ''
//     i--
//     if (i < 0) {
//         i = images.length -1;
//     }    images[i].className = 'showed'
// }

// let createNew = document.createElement('div')
// let createImg = document.createElement('img')


// createImg.setAttribute('src', 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png')

// console.log(createImg);

// createNew.innerHTML = 'HI, '
// createNew.style.fontSize = '50px'
// createNew.className ='text'
// createNew.innerHTML += '<a href="">PEPE</a>'

// console.log(createNew);

// let body = document.body;

// body.prepend(createNew)
// body.append(createImg)




// let categories = document.querySelectorAll(".categories > li")
// categories.forEach(el => {
//     console.log("Category: ", el.firstChild);
//     console.log("Count: ", el.firstElementChild.children.length);
// })

// let list = document.querySelector(".list")
// console.log(list);
// list.firstElementChild.style.color = "red"
// list.lastElementChild.style.color = "blue"

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// let list = document.querySelector(".list")
// let newEl = elements.reduce((acc, el) => acc +`<li>${el}</li>`, '');
// list.innerHTML = newEl
// console.log(list);

// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];

// let gallery = document.querySelector(".gallery")
// gallery.innerHTML = galleryItems.reduce((acc, el) => acc + `<li><img src="${el.url}" alt="${el.alt}"></li>`, '')
// console.log(gallery);


// let sizeFilter = document.querySelectorAll(".size-filter input[checked]")
// function collectInputData(inputs) {
// let reg = Array.from(inputs);
//     return reg.map(el => el.value)    
// }
// console.log(collectInputData(sizeFilter));


// function createMovieCard() {
//     let container = document.querySelector(`.container`)
//     let movie = document.createElement('div')
//     let movie__image = document.createElement('img')
//     let movie__Body = document.createElement('div')
//     let movie__title = document.createElement('h2')
//     let movie__description = document.createElement('p')
//     let movie__date = document.createElement('p')
//     let movie__rating = document.createElement('p')

//     movie.classList.add('movie');
//     movie__image.classList.add('movie__image');
//     movie__Body.classList.add('movie__Body');
//     movie__title.classList.add('movie__title');
//     movie__description.classList.add('movie__description');
//     movie__date.classList.add('movie__date');
//     movie__rating.classList.add('movie__rating');

//     movie__image.setAttribute('src', 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg')
//     movie__image.setAttribute('alt', 'movie image')
//     movie__title.textContent = 'The Godfather'
//     movie__description.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.'
//     movie__date.textContent = 'Released: 1972-03-14'
//     movie__rating.textContent = 'Rating: 8.6'
    
//     container.appendChild(movie)
//     movie.appendChild(movie__image)
//     movie.appendChild(movie__Body)
//     movie__Body.appendChild(movie__title)
//     movie__Body.appendChild(movie__description)
//     movie__Body.appendChild(movie__date)
//     movie__Body.appendChild(movie__rating)
//     }
// createMovieCard()


// function createBoxes(num) {

// }
// createBoxes(3)




//////////////////////////////////////////////// homework ///////////////////////////////////////////////////

// const posts = [
//     {
//       img: "https://placeimg.com/400/150/arch",
//       title: "Post title 1",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//       link: 'link-1.com'
//     },
//     {
//       img: "https://placeimg.com/400/150/nature",
//       title: "Post title 2",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//       link: 'link-2.com'
//     },
//     {
//       img: "https://placeimg.com/400/150/arch",
//       title: "Post title 3",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//       link: 'link-3.com'
//     }
//   ];
  
//   function createPostCard(post) {
//     post.forEach(el => {
//         let container = document.querySelector(`.container`)
//         let movie = document.createElement('div')
//         let movie__image = document.createElement('img')
//         let movie__Body = document.createElement('div')
//         let movie__title = document.createElement('h2')
//         let movie__description = document.createElement('p')
//         let movie__date = document.createElement('p')
//         let movie__link = document.createElement('p')
    
//         movie.classList.add('movie');
//         movie__image.classList.add('movie__image');
//         movie__Body.classList.add('movie__Body');
//         movie__title.classList.add('movie__title');
//         movie__description.classList.add('movie__description');
//         movie__date.classList.add('movie__date');
//         movie__link.classList.add('movie__link');
    
//         movie__image.src = el.img
//         movie__image.setAttribute('alt', 'movie image')
//         movie__title.textContent = el.title
//         movie__description.textContent = el.text
//         movie__link.textContent = el.link
        
//         container.appendChild(movie)
//         movie.appendChild(movie__image)
//         movie.appendChild(movie__Body)
//         movie__Body.appendChild(movie__title)
//         movie__Body.appendChild(movie__description)
//         movie__Body.appendChild(movie__link)
//     });
//     }
    
//     let mass = []
//     function createCards(a) {
//     createPostCard(a)
//     mass.push(a)
// }
// console.log(mass);

// createCards(posts)

let root = document.querySelector('#root')
let box = document.createElement('div')

function RNGcolor() {
    let red = Math.floor(Math.random()*255)
    return red
}

function createBoxes(num) {
    let i = 0;
    let w = 30;
    while (i < num) {
        i++
    root.append(box)
    box.innerHTML += `<div style = "width: ${w + 'px'}; height: ${w + 'px'}; background: rgb(${RNGcolor()},${RNGcolor()},${RNGcolor()})"></div>`
    w +=10
    }
}
createBoxes(10)
console.log(box);
