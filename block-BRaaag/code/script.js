let input = document.querySelector('input');
let root = document.querySelector('ul');

// State to store movies
let moviesList = [];

// Handle Delete
function handleDelete(event) {
  var id = event.target.dataset.id;
  moviesList.splice(id, 1);
  displayMovies(moviesList, root);
}

// Handle Toggle
function handleToggle(event) {
  var id = event.target.dataset.id;
  moviesList[id].isWatched = !moviesList[id].isWatched;
  displayMovies(moviesList, root);
}

// Display movies list
function displayMovies(moviesList = [], list) {
  list.innerHTML = '';
  moviesList.forEach((movie, index) => {
    let li = document.createElement('li');
    li.classList.add('flex-1');
    let movieName = document.createElement('p');
    movieName.innerText = movie.name;
    movieName.classList.add('name');
    let options = document.createElement('p');
    let toggle = document.createElement('span');
    toggle.innerText = movie.isWatched ? 'Watched' : 'To Watch';
    toggle.setAttribute('data-id', index);
    toggle.addEventListener('click', handleToggle);
    let dlt = document.createElement('span');
    dlt.innerText = 'Remove';
    dlt.setAttribute('data-id', index);
    dlt.addEventListener('click', handleDelete);
    options.append(toggle, dlt);
    li.append(movieName, options);
    list.append(li);
  });
}

// Haandling Input
input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && event.target.value) {
    moviesList.push({
      name: event.target.value,
      isWatched: false,
    });
    event.target.value = '';
    displayMovies(moviesList, root);
  }
});

// Display movie list on load
displayMovies(moviesList, root);
