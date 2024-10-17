// JS Array Methods


// array.forEach()
/* 
- forEach
- function(element, index, array)
- {//your code here}

*/

const students = ['Paolo', 'Giulia', 'Marco'];

// loop over the array using a for loop
for (let index = 0; index < students.length; index++) {
  const element = students[index];
}

// loop over an array use a forEach
students.forEach((element, index, arr) => {
  console.log(element);
  console.log(index);
  console.log(arr);
})


const classes = [
  {
    number: 35,
    topic: 'fullstack'
  },
  {
    number: 25,
    topic: 'frontend'
  },
  {
    number: 25,
    topic: 'back'
  }
]

// ✅classes[0].topic // classes[0] is an object
// ❌ classes.topic // classes is an array

classes.forEach(function (element, index, arr) {
  console.log(element['topic']);
  console.log(element.topic);

  console.log(index);
  console.log(arr);

})


/* 

Loops untill it finds elements in the array

1. element =  {
    number: 35,
    topic: 'fullstack'
  },
index = 0
array = [
  {
    number: 35,
    topic: 'fullstack'
  },
  {
    number: 25,
    topic: 'frontend'
  },
  {
    number: 25,
    topic: 'back'
  }
]


2.  element = {
    number: 25,
    topic: 'frontend'
  },
index = 1
array = [
  {
    number: 35,
    topic: 'fullstack'
  },
  {
    number: 25,
    topic: 'frontend'
  },
  {
    number: 25,
    topic: 'back'
  }
]

3.  element = {
    number: 25,
    topic: 'back'
  }
    index = 2
array = [
  {
    number: 35,
    topic: 'fullstack'
  },
  {
    number: 25,
    topic: 'frontend'
  },
  {
    number: 25,
    topic: 'back'
  }
]

*/


const cats = [
  { name: 'Jerry', color: 'Gray' },
  { name: 'Felix', color: 'Black and White' },
  { name: 'Garfield', color: 'Orange' },
];

cats.forEach((element) => {
  console.log(`
    ${element.name}'s color is ${element.color}
    `);
});




// MAP
/* const newArr = cats.map((element, index, array) => {
  console.log('map');
  return `${element.name} color: ${element.color}`
}); */

const newArr = cats.map(cat => `${cat.name} color: ${cat.color}`);

console.log(newArr);

const newCats = []
for (let index = 0; index < cats.length; index++) {
  const cat = cats[index];

  newCats.push(`${cat.name} color: ${cat.color}`)

}
console.log(newCats);



// Filter
const numbers = [10, 585, 45, 78, 99, 145]

const evenNumbs = numbers.filter((numb, index, array) => {
  if (numb % 2 === 0) {
    return true
  }
  return false

})


const even = numbers.filter(numb => numb % 2 === 0)

console.log(evenNumbs);


// with the for loop
const newNumbs = []
for (let i = 0; i < numbers.length; i++) {
  const numb = numbers[i];
  if (numb % 2 === 0) {
    newNumbs.push(numb)
  }
}

console.log(newNumbs);



/* 
1. (nub = 10) numb % 2 === 0 ? numb -> evenNumbers
2. (nub = 585)  numb % 2 === 0 x 
3. (nub = 45)  numb % 2 === 0 x 
4. (nub = 78)  numb % 2 === 0 ? numb -> evenNumbers
5. (nub = 99)  numb % 2 === 0 x 
6. (nub = 145)  numb % 2 === 0 x

evenNumbers = [10, 75]

*/



// Find


const randomNumbers = [11, 33, 4554, 66, 77, 99]
const result = randomNumbers.find((numb, index, array) => {
  console.log('find');
  return numb > 400

})

console.log(result);



const movies = [
  { id: 1, title: 'The Shawshank Redemption', year: 1994 },
  { id: 2, title: 'The Godfather', year: 1972 },
  { id: 3, title: 'The Dark Knight', year: 2008 },
  { id: 4, title: '12 Angry Men', year: 1957 },
  { id: 5, title: 'Schindler\'s List', year: 1993 },
  { id: 6, title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { id: 7, title: 'Pulp Fiction', year: 1994 },
  { id: 8, title: 'The Good, the Bad and the Ugly', year: 1966 },
  { id: 9, title: 'Forrest Gump', year: 1994 },
  { id: 10, title: 'Inception', year: 2010 }
]

let newObj;
for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];

  if (movie.id === 4) {
    newObj = movie
    break;
  }

}

//console.log(newObj);


const foundMovie = movies.find(movie => movie.id === 4)
console.log(foundMovie);

