

// select the dom element where put the items

//const listEl = document.querySelector('.movies');

//Cannot set properties of null (setting 'innerHTML') ? check the selection above
//console.log(listEl); // <ul></ul>

// an array of movies
//const movies = ['The Matrix', 'The Dark Knight', 'Iron Man'];

/* let moviesItems = ''

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  const movieLi = `<li>${movie}</li>`
  moviesItems += movieLi;
  // updated the dom on the fly
  //listEl.insertAdjacentHTML('beforeend', movieLi)
} */
// updates the dom only when the data are ready
//listEl.innerHTML = moviesItems;
//console.log(moviesItems);


const listEl = document.querySelector('.movies');
const movies = ['The Matrix', 'The Dark Knight', 'Iron Man'];
for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  // creates a new li element <li></li>
  const movieLi = document.createElement('li');
  console.log(movieLi);

  // updates the node content
  // option 1
  movieLi.append(movie)
  // option 2
  //movieLi.textContent = movie;
  // option 3
  //movieLi.innerHTML = movie; // can add also html tags

  // update the node list element
  listEl.appendChild(movieLi);
}




