// 📌 Array

// loggo l'array direttament in console
console.log(['Ciao', 'sono', 'un', 'array']);

const movies = ['Matrix', 'Avartar', 'Imitation game']; // 0 matrix, 1 avatar, 2 imitation game

// logga la variable contentente l'array in console
console.log(movies);

// usa i metodi e proprietá dell'array per effettuare varie operazioni
console.log(movies.length);


// Array di numeri

const numbers = [1, 2, 3];
console.log(numbers);


// array mixed strings and numbers
const mix = ['ciao', '1', 50]
console.log(mix)


// array mix of arrays

const movie = [
  'Matrix',
  120,
  [
    'kenau reves',
    'trinity',
    '<NAME>',
  ]
]

console.log(movie);


// 📌 Access array elements

console.log(movies[1]);

console.log(movies[0]);

const actors = movie[2];
console.log(actors[1]);

const trinity = movie[2][1];


// undefined if the element in that position doesn't exist
console.log(movies[200]);



// nested arrays

const nestedArray = [
  [
    [

    ]
  ]
]



// 📌 Array methods


console.log(movies.length) // 3

movies.push('Avartar 2'); // add a new element to the end of an array

console.log(movies); // array(4)

movies.pop(); // remove last element from an array

console.log(movies);



// 📌 Array + for loop


const new_movies = ['Matrix', 'Avartar', 'Imitation game']; // 0 matrix, 1 avatar, 2 imitation game
console.log(new_movies.length); // 3

for (let i = 0; i < new_movies.length; i++) {

  //log directly
  //console.log(new_movies[i]);
  //  save and log in a variable
  const movie = new_movies[i]
  console.log(movie, '📌');

}





// for loop per iterare anche le stringhe
const avatar_movie = 'Avartar';

for (let index = 0; index < avatar_movie.length; index++) {
  const char = avatar_movie[index];
  console.log(char);

}




/* Update array elements */

const new_movies_2 = ['Matrix', 'Avartar', 'Imitation game'];

// update thefirst element
const matrix = new_movies_2[0];

new_movies_2[0] = 'The Matrix';

console.log(new_movies_2); // array(3) ["The Matrix", "Avartar", "Imitation game"]


// CRUD operations
// create an array
// read an element of an array
// update the array
// delete an element from an array

