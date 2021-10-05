var input = document.querySelector('input');
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
  // root.innerHTML = '';
  let ui = moviesArr.map((elm, index) => {
    var li = React.createElement(
      'li',
      {
        className: 'flex-1',
      },

      React.createElement(
        'p',
        {
          className: 'name',
        },
        elm.name
      ),

      React.createElement(
        'p',
        {},

        React.createElement(
          'span',
          {
            'data-id': index,
            onClick: handleToggle,
          },
          elm.isWached ? 'Watched' : 'To Watched'
        ),

        React.createElement(
          'span',
          {
            'data-id': index,
            onClick: handleDelete,
          },
          'Remove'
        )
      )
    );
    return li;
  });

  ReactDOM.render(ui, root);
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
