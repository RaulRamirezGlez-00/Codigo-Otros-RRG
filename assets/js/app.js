const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'Cargando...';

  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log(data);

    $n.textContent = data.name || 'Nombre no disponible';
    $b.textContent = data.blog || 'Blog no disponible';
    $l.textContent = data.location || 'Ubicación no disponible';
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.error('OH NO!', err);
  $n.textContent = `Algo salió mal: ${err.message}`;
}

displayUser('stolinski');