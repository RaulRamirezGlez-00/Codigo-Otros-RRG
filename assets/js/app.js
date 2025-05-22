const baseEndpoint = 'https://api.github.com';
const usersEndpoint = baseEndpoint + '/users';

// Selección básica de elementos usando className
const nameElement = document.querySelector('.name');
const blogElement = document.querySelector('.blog');
const locationElement = document.querySelector('.location');

function displayUser(username) {
  nameElement.textContent = 'Cargando...';

  // Petición básica con fetch y promesas para el usuario
  fetch(usersEndpoint + '/' + username)
    .then(function(response) {
      return response.json(); // Convertir a JSON los elementos
    })
    .then(function(data) {
      // Muestra los datos en el HTML
      nameElement.textContent = data.name || 'No hay nombre';
      blogElement.textContent = data.blog || 'No hay blog';
      locationElement.textContent = data.location || 'No hay ubicación';
    })
    .catch(function(error) {
      // Muestra si hay un error simple
      console.log('Ocurrió un error:', error);
      nameElement.textContent = 'Error al cargar usuario';
    });
}

// Llamada inicial
displayUser('stolinski');