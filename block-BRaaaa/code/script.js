let input = document.querySelector('input');
var root = document.querySelector('ul');

// State to store mpvies
var moviesList = [];

// Handling Watched/Unwatched
function handleToggle(event) {
  let id = event.target.dataset.id;
  moviesList[id].isWached = !moviesList[id].isWached;
  displayMovies(moviesList);
}

// Handling Delete
function handleDelete(event) {
  let id = event.target.dataset.id;
  moviesList.splice(id, 1);
  displayMovies(moviesList);
}

// Display Movies
function displayMovies(moviesArr = []) {
  root.innerHTML = '';
  moviesArr.forEach((elm, index) => {
    let li = document.createElement('li');
    li.classList.add('flex-1');
    let movieName = document.createElement('p');
    movieName.innerText = elm.name;
    movieName.classList.add('name');
    let options = document.createElement('p');
    let toggle = document.createElement('span');
    if (elm.isWached === true) {
      toggle.innerText = 'Watched';
    } else {
      toggle.innerText = 'To Watch';
    }
    toggle.setAttribute('data-id', index);
    toggle.addEventListener('click', handleToggle);
    let dlt = document.createElement('span');
    dlt.innerText = 'Remove';
    dlt.setAttribute('data-id', index);
    dlt.addEventListener('click', handleDelete);
    options.append(toggle, dlt);
    li.append(movieName, options);
    root.append(li);
  });
}

// Handling Input
input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && event.target.value) {
    moviesList.push({
      name: event.target.value,
      isWached: false,
    });
    event.target.value = '';
    displayMovies(moviesList);
  }
});

// Calling Display Movies
displayMovies(moviesList);
