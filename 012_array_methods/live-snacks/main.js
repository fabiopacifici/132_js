/* 

Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.

*/

const cars = [
  {
    marca: "Toyota",
    modello: "Corolla",
    alimentazione: "benzina"
  },
  {
    marca: "Honda",
    modello: "Civic",
    alimentazione: "diesel"
  },
  {
    marca: "Fiat",
    modello: "Punto",
    alimentazione: "gpl"
  },
  {
    marca: "Volkswagen",
    modello: "Golf",
    alimentazione: "elettrico"
  },
  {
    marca: "Renault",
    modello: "Clio",
    alimentazione: "metano"
  },
  {
    marca: "Ford",
    modello: "Focus",
    alimentazione: "benzina"
  },
  {
    marca: "Nissan",
    modello: "Micra",
    alimentazione: "diesel"
  },
  {
    marca: "Opel",
    modello: "Astra",
    alimentazione: "gpl"
  },
  {
    marca: "Peugeot",
    modello: "308",
    alimentazione: "elettrico"
  },
  {
    marca: "Skoda",
    modello: "Octavia",
    alimentazione: "metano"
  }
];

// option 1
const petrol = cars.filter((car) => {
  if (car.alimentazione.toLowerCase() === 'benzina') {
    return true
  }
  return false
})

// option 2
const petrol_2 = cars.filter((car) => {
  return car.alimentazione.toLowerCase() === 'benzina'
})

// option 3
//nel primo array solo le auto a benzina
const petrolCars = cars.filter((car) => car.alimentazione.toLowerCase() === 'benzina')
console.log(petrolCars);


//nel secondo solo le auto a diesel
const dieselCars = cars.filter((car) => car.alimentazione.toLowerCase() === 'diesel')
console.log(dieselCars);


const otherCars = cars.filter(car => car.alimentazione.toLowerCase() !== 'benzina' && car.alimentazione.toLowerCase() !== 'diesel')
console.log(otherCars);

/* 

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

*/


const names = ['lUKE', 'SOLO', 'obIWAN', 'MANdo']

const capitalized = names.map(name => {

  // take the first char and convert to a uppercase
  const firstChar = name[0].toUpperCase();
  // take the rest of the string and convert to lower case
  const restOfTheString = name.slice(1).toLowerCase()

  // return the new string
  return firstChar + restOfTheString


})

console.log(capitalized);


const cap = names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())

console.log(cap);
