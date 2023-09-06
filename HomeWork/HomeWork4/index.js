const savedUsers = JSON.parse(localStorage.getItem('users')) || [];

// Функция для сохранения списка пользователей в локальное хранилище
function saveUsersToLocalStorage(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const userList = document.getElementById('user-list');
    
    
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Удалить';
      deleteButton.addEventListener('click', () => {

        // Удаление пользователя из списка и из localStorage
        const index = users.indexOf(user);
        if (index !== -1) {
          users.splice(index, 1);
          saveUsersToLocalStorage(users);
        }
        li.remove();
      });
      
      li.appendChild(deleteButton);
      userList.appendChild(li);
    });
  })
  .catch(error => {
    console.log(error);
  });

//   Необязательная задача

// Необходимо реализовать отрисовку 10 картинок собак 
// из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const imageContainer = document.getElementById('image-container');
let counter = 0;

function fetchDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.message;
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageContainer.appendChild(imageElement);

      counter++;
      if (counter < 10) {
        setTimeout(fetchDogImage, 3000);
      }
    })
    .catch(error => {
      console.log(error);
    });
}

fetchDogImage();