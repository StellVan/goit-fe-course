'use strict'

// const a = {
//     name: "Mar",
//     isActive: true,
//     hobby: {
//         run: true,
//         jump: false,
//     }
// }
// let b = JSON.stringify(a)
// let c = JSON.parse(b)
// console.log(b);
// console.log(c);


// let newDate
// const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'

// fetch(url)
//     .then(response => {
//         if(response.ok) return response.json()

//         throw new Error('Error')
//     })
//     .then(date => console.log(date))
//     .catch(err => console.log('ERRRRRRRRRR!!!', err))


// function getPost(posts) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${posts}`)
//         .then(response => response.json())
// }

// getPost(9)
//     .then(data => console.log(data.title))


// const newObj = {
//     name: "Carl",
//     number: "001",
//     car: {
//         first: "Rider",
//         second: "nice",
//     },
//     kill: false
// }


// const url = 'https://jsonplaceholder.typicode.com/posts';

// const settings = {
//     method: 'POST',
//     body: JSON.stringify(newObj),
//     headers: {
//         "Content-type": "application/json"
//     }
// }

// fetch(url, settings)
//     .then(res => res.json())
//     .then(i => console.log(i))

// const putObj = {
//     title: "NWNWNWNWNWNWNN",
// }

// const putSettings = {
//     method: "PUT",
//     body: JSON.stringify(putObj),
//     headers: {
//         "Content-type": "application/json"
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res => res.json())
//     .then(i => console.log(i))






// const newLocal = {
//     name: "Mar",
//     job: "prg",
// }

// localStorage.setItem('about', JSON.stringify(newLocal))

// let result = JSON.parse(localStorage.getItem('about'))

// console.log(result);




// let text = document.querySelector('.text')
// let input = document.querySelector('.input')
// let btn = document.querySelector('.btn')

// function writeLocal() {
//     localStorage.setItem('about', input.value)
//     getLocal()
// }

// function getLocal() {
//     text.textContent = localStorage.getItem('about')
// }

// getLocal()

// btn.addEventListener('click', writeLocal)



// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://restcountries.eu/rest/v2/name/";

// function fetchCountryData(evt) {
//     evt.preventDefault()
//     let url = API_URL + input.value
//     fetch(url)
//         .then(res => {
//             if (res.ok) return res.json()
//             throw new Error('Wrong input')
//         })
//         .then(i => result.innerHTML =`
//         <p>Country name: ${i[0].name}</p>
//         <p>Capital: ${i[0].capital}</p>
//         <p>Main currency: ${i[0].currencies[0].name}</p>
//         <img src = "${i[0].flag}">`)
//         .catch(err => console.error("Error", err))
// }
// form.addEventListener("submit", fetchCountryData);



// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://api.github.com/users/";

// function fetchCountryData(evt) {
//     evt.preventDefault()
//     let url = API_URL + input.value
//     fetch(url)
//         .then(res => res.json())
//         .then(
//             result.innerHTML = `<img class = "loadingImage" src="https://i.gifer.com/AvGf.gif">`
//         )
//         .then(i => {
//             setTimeout(() => {
                
//                 if (i.message) {
//                     result.innerHTML = null
//                     result.innerHTML += `<p>Error!</p>`
//                     result.innerHTML += i.message
//                 } else {
//                     result.innerHTML = null
//                     result.innerHTML =
//                     `
//                     <img src = "${i.avatar_url}">
//                     <p>Username: ${i.login}</p>
//                     <p>Bio: ${i.bio !== null? i.bio : "dsgsd"}</p>
//                     <p>Public repos: ${i.public_repos}</p>
//                     `
//                 }
//             }, 2000);
//             )
//             }
//         .catch(err => console.error("Error", err))
// }
// form.addEventListener("submit", fetchCountryData);


// const form = document.querySelector(".search-form");
// const userTable = document.querySelector(".user-table");
// const url = "https://jsonplaceholder.typicode.com/users/"

// function fetchUsers(evt) {
//     evt.preventDefault()

//     fetch(url)
//         .then(res => {
//             if (res.ok) return res.json()
//             throw new Error()
//         })
//         .then(a =>  {userTable.innerHTML +=
//             `
//             <tr>
//                 <th>Имя</th>
//                 <th>Почта</th>
//                 <th>Город</th>
//                 <th>Вебсайт</th>
//                 <th>Компания</th>
//             </tr>
//             `
//             a.forEach(el => userTable.innerHTML +=
//                 `
//                 <tr>
//                     <td>${el.name}</td>
//                     <td>${el.email}</td>
//                     <td>${el.address.city}</td>
//                     <td>${el.website}</td>
//                     <td>${el.company.name}</td>
//                 </tr>
//                 `)
//         })
//         .catch(err => console.error("ERROR", err))
// }

// form.addEventListener("submit", fetchUsers);



// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// function getUserById(evt) {
//     evt.preventDefault()
//     const url = `https://jsonplaceholder.typicode.com/users/${input.value}`

//         fetch(url)
//         .then(status => {

//             if( status.ok) return status.json()
            
//             throw new Error( result.innerHTML = `
//                  <p>Ошибка! Пользователя с таким id не существует"</p>
//                  `)
//             })
//             .then( data => {
//                  result.innerHTML = 
//                      `
//                      <p>Name: ${data.name}</p>
//                      <p>Username: ${data.username}</p>
//                      <p>Email: ${data.email}</p>
//                      `})

//             .catch(err => console.error('ERROR', err))

//     input.value = null
// }

// form.addEventListener("submit", getUserById);





// ========================================= Homework ===============================================



function getAllUsers() {
    
}

function getUserById(id) {
    
}

function addUser(name, age) {
    
}

function removeUser(id) {
    
}

function updateUser(id, user) {
    
}

