const baseEndpoint = 'https://api.github.com';
const usersEndpoint = baseEndpoint + '/users';
const nameElement = document.querySelector('.name');
const blogElement = document.querySelector('.blog');
const locationElement = document.querySelector('.location');

function displayUser(username) {
  nameElement.textContent = 'Cargando...';

  fetch(usersEndpoint + '/' + username)
    .then(function(response) {
      return response.json(); 
    })
    .then(function(data) {
     
      nameElement.textContent = data.name || 'No hay nombre';
      blogElement.textContent = data.blog || 'No hay blog';
      locationElement.textContent = data.location || 'No hay ubicación';
    })
    .catch(function(error) {
     
      console.log('Ocurrió un error:', error);
      nameElement.textContent = 'Error al cargar usuario';
    });
}

displayUser('stolinski');