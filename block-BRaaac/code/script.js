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

// Create Element Function
function elem(type, attr = {}, ...childern) {
  let element = document.createElement(type);

  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }

  childern.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child);
    } else if (typeof child === 'string') {
      let node = document.createTextNode('child');
      element.append(node);
    }
  });

  return element;
}

// Display Movies
function displayMovies(moviesArr = []) {
  root.innerHTML = '';
  moviesArr.forEach((elm, index) => {
    let li = elem('li', {
      className: 'flex-1',
    });
    let movieName = elem('p', { className: 'name' });
    movieName.innerText = elm.name;
    let options = elem(
      'p',
      {},
      elem('span', {
        'data-id': index,
        innerText: elm.isWached ? 'Watched' : 'To Watch',
        className: 'toggle',
      }),

      elem('span', {
        'data-id': index,
        innerText: 'Remove',
        className: 'dlt',
      })
    );
    var toggle = document.querySelector('.toggle');
    var dlt = document.querySelector('.dlt');
    // console.log(toggle, dlt);
    // toggle.addEventListener('click', handleToggle);
    // dlt.addEventListener('click', handleDelete);
    // var chld = li.lastElementChild;
    console.log(li);
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
