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
function createElm(type, attr = {}, ...childern) {
  let element = document.createElement(type);

  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith('on')) {
      let eventType = key.replace('on', '').toLowerCase();
      element.addEventListener(eventType, attr[key]);
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
    var li = createElm(
      'li',
      {
        className: 'flex-1',
      },

      createElm('p', {
        className: 'name',
        innerText: elm.name,
      }),

      createElm(
        'p',
        {},

        createElm('span', {
          'data-id': index,
          innerText: elm.isWached ? 'Watched' : 'To Watched',
          onClick: handleToggle,
        }),

        createElm('span', {
          'data-id': index,
          innerText: 'Remove',
          onClick: handleDelete,
        })
      )
    );

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
