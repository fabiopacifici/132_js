console.log('hi');

// 📌 Object literal

// Describe a person
const luke = {
  first_name: 'Luke',
  last_name: 'Skywalker',
  age: 40,
  friends: ['obiwan', 'grogu', 'anakin', 'yoda', 'solo', 'antonio']
}

const fabio = {
  first_name: 'Fabio',
  last_name: 'Skywalker',
  age: 44
}

// log the object
console.log(luke, fabio);

// Blueprint
/* const File = {
  name: '',
  extension: '',
  path: '',
  type: '',
  size: '',
} */


const index = {
  name: 'index',
  extesion: 'html',
  path: '~/boolean/live-objects/',
  type: 'text',
  size: 10,
}



const style = {
  name: 'style',
  extesion: 'css',
  path: '~/boolean/live-objects/assets/css',
  type: 'text',
  size: 10,

}

console.log(index, style);

// blueprint

/* const Service = {
  description: '',
  cost: '',
  duration: '',
} */


const barber = {
  description: 'Barbiere',
  cost: 10,
  duration: 30,
}

console.log(barber);
/* 
const Article = {
  author: '',
  title: '',
  content: ''
}
 */


// 📌 Access objects properties

/* 
const luke = {
  first_name: 'Luke',
  last_name: 'Skywalker',
  age: 40
}
*/

// dot notation
console.log(
  luke.first_name
); // Luke
console.log(luke.friends);

// sq notation
console.log(luke['age'], luke['first_name']);




// 📌 Update a value
luke.first_name = 'Luke skywalker'


// createa variable where a given value
const name = 'fabio';
const year = 2024
const is_dinner_time = false
const list = ['person 1', 'person 2', 'person 3']


const dog = {
  name: 'bart'
}


console.log(dog);
// add a property to an object if not present
dog.color = 'black';

// updates a property if it exists
dog.color = 'White';
console.log(dog);

dog.name = 'Luke'

console.log(dog);

//#endregion
for (const key in luke) {
  //luke.key // undefined
  // key contains the name of each key iteration after iteration
  console.log(luke[key]);

  // with the key you can get its value
  const value = luke[key]

  console.log(`${key}: ${value}`);


}
console.log('out of the loop');



// 📌 Complex data structures

const posts = [
  {
    title: 'learn js',
    image: 'https://picsum.photos/400/200',
    content: 'lorem ipsum dolor',
    author: 'Luke'
  },
  {
    title: 'learn js 1',
    image: 'https://picsum.photos/400/200',
    content: 'lorem ipsum dolor',
    author: 'Luke'
  },
  {
    title: 'learn js 2',
    image: 'https://picsum.photos/400/200',
    content: 'lorem ipsum dolor',
    author: 'Luke'
  },
  {
    title: 'learn js 3',
    image: 'https://picsum.photos/400/200',
    content: 'lorem ipsum dolor',
    author: 'Luke'
  },
  {
    title: 'learn js 4',
    image: 'https://picsum.photos/400/200',
    content: 'lorem ipsum dolor',
    author: 'Luke'
  },
  {
    title: 'learn js 5',
    image: 'https://picsum.photos/400/200',
    content: 'lorem ipsum dolor',
    author: 'Luke'
  }
]

const firstPost = posts[0] // {...}


const postsRowEl = document.querySelector('.row')
console.log(postsRowEl);

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];

  console.log(post.title, post.author, post.content);


  const markup = `
    <div class="col">
          <div class="card">
            <img class="card-img-top" src="${post.image}" alt="">
            <div class="card-body">
              <h3>${post.title}</h3>
              <p>${post.author}</p>
            </div>
          </div>
        </div>
  `

  postsRowEl.insertAdjacentHTML('beforeend', markup)

}



/* 📌 Live snack blocco 5 - 1 

Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

*/

const zucchini = [
  {
    "nome": "Zucchina 1",
    "lunghezza": 15,
    "larghezza": 3,
    "colore": "verde",
    "peso": 150,
  },
  {
    "nome": "Zucchina 2",
    "lunghezza": 12,
    "larghezza": 2,
    "colore": "verde",
    "peso": 120,
  },
  {
    "nome": "Zucchina 3",
    "lunghezza": 18,
    "larghezza": 4,
    "colore": "verde",
    "peso": 180,
  },
  {
    "nome": "Zucchina 4",
    "lunghezza": 10,
    "larghezza": 2,
    "colore": "verde",
    "peso": 100,
  },
  {
    "nome": "Zucchina 5",
    "lunghezza": 16,
    "larghezza": 3,
    "colore": "verde",
    "peso": 160,
  },
  {
    "nome": "Zucchina 6",
    "lunghezza": 14,
    "larghezza": 2,
    "colore": "verde",
    "peso": 140,
  },
  {
    "nome": "Zucchina 7",
    "lunghezza": 17,
    "larghezza": 4,
    "colore": "verde",
    "peso": 170,
  },
  {
    "nome": "Zucchina 8",
    "lunghezza": 13,
    "larghezza": 3,
    "colore": "verde",
    "peso": 130,
  },
  {
    "nome": "Zucchina 9",
    "lunghezza": 19,
    "larghezza": 4,
    "colore": "verde",
    "peso": 190,
  },
  {
    "nome": "Zucchina 10",
    "lunghezza": 11,
    "larghezza": 2,
    "colore": "verde",
    "peso": 110,
  }
]

let sum = 0

for (let i = 0; i < zucchini.length; i++) {
  const zucchina = zucchini[i];

  const key = 'peso'
  sum = sum + zucchina[key] // key = 'peso' => zucchina['peso']
  //sum += zucchina.key // undefined

}

console.log(sum);




