console.log('hi');


const Person = {
  // Properties
  name: 'John',
  age: 12,
  lastName: 'Doe',

  // Methods
  walk() {
    // This refers to the object where it is called
    //console.log(this); // Person
    console.log(`${this.name}: is walking`);

  },
  talk() {
    console.log('I am Talking');

  }
}
// get the propoerties
console.log(Person.name, Person.lastName);

// invke a method 
Person.walk()
Person.talk()

console.log();


// Destructuring

//const personName = Person.name
//const personAge = Person.age
//const personLastName = Person.lastName

const { name, lastName } = Person
console.log(name, lastName);


let title = 'Matrix';
let lenght = 120
let cast = ['actor1', 'actor2']

// destructuring
const actorOne = cast[0]
const actorTwo = cast[1]


// dynamic keys with [] square brackets
let castKey = 'cast'

const matrix = {
  title: title,
  length: length,
  [castKey]: cast
}

console.log(matrix);


const matrix2 = {
  title,
  lenght,
  cast
}

console.log(matrix2);



// destructuring arrais
const movies = ['Avatar', 'Matrix', 'Ace ventura', 'Imitation game']

const [avatar, , ace, imi] = movies
console.log(avatar, ace, imi);





// Loop an array

const tv = [
  {
    'title': 'lucifer',
    'description': ''
  },
  {
    'title': 'lost',
    'description': ''

  }
]



for (let i = 0; i < tv.length; i++) {
  const show = tv[i];
  const { title, description } = show


  const markup = `
    <h2>${title}</h2>
    <p>${description}</p>
  `

}



// Spred operator
// clone the tv array into a new one
const newArray = [
  ...tv,
  {
    'title': 'lost2',
    'description': ''

  }
]

console.log(tv, newArray);


const newPerson = { ...Person, animals: ['Antifa', 'Anakin'] }

console.log(newPerson, Person);

// rest parameter

function logEveything(...params) {
  console.log(params); // array

  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    console.log(param);
  }

}

logEveything('ciao', 123, true, {
  'title': 'lost2',
  'description': ''

}, ['ciao', 'ciao']);



