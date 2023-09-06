// localStorage.setItem('name', 'Katya'); 
// localStorage.setItem('lastname','Shiverskikh');
// localStorage.setItem('email', 'test@mail.ru');

// localStorage.removeItem('name'); // удаление данных

// const email = localStorage.getItem('email'); // получение данных
// console.log(email);

// localStorage.user = JSON.stringify({name: 'Ekaterina'});

// const user = JSON.parse(localStorage.user);
// console.log(user);

// localStorage.clear(); //удаление хранилище


// Асинхронщина 

const myPromise = new Promise((resolve, reject) => {

});
console.log(myPromise);

myPromise.then((value) => {
    // действие в случае выолнения промиса
})
.catch((error) => {
    // действия в случае отклонения промиса
})

// Пример получения данных с API

const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.error('Ошибка'));

// // упрощение 

// const getData = (url) => 
//  new Promise((resolve, reject) => {
//     fetch(url)
//      .then((response) => response.json())
//      .then((data) => resolve(data))
//      .catch((error) => reject(error))
//  })

// getData('https://jsonplaceholder.typicode.com/posts')
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Ошибка"));

// async-await

const getData2 = async(url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

try {
    const data = await getData2(url)
    console.log(data);
} catch(error) {
    console.log(error.message);
}