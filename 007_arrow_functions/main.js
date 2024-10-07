console.log('Welcome arrow functions');


// Functions

logNumber(12);
// function declaration (soggetta ad hoising)
function logNumber(num) {
  console.log(num);
}
// invoke
logNumber(12);
// anonymous function (they have no name)
/* 
function (){
  // your code here
}

*/

// function expression (hoisting does not apply)
//console.log(getNumber(12)); // 12 ReferenceError: Cannot access 'getNumber' before initialization

const getNumber = function (num) {
  return num
}
// invoke the function expression
console.log(getNumber(12)); // 12


// Arrow functions

// sintassi senza graffe (il return é implicito)
const sumTwoPlusTwo = () => 2 + 2
console.log(sumTwoPlusTwo()); // 4

// sintassi con graffe (return é da esplicitarre)
const sum = () => {
  const sumNumbers = 2 + 2
  return sumNumbers
  //return 2 + 2
}

console.log(sum()); // 4


// sintassi senza tonde, con graffe con return explicito
// - puoi omettere le tonde solo se la funzione richiede un unico parametro


const calcAge = yob => {

  const currentYear = new Date().getFullYear()
  const result = currentYear - yob
  return result
}
console.log(calcAge(1980));

// sintassi senza tonde, senza graffe con return implicito
// - puoi omettere le tonde solo se la funzione richiede un unico parametro
// possiamo omettere le graffe se la logica é su una sola riga
// possiamo omettere il return quando omettiamo anche le graffe
const calcAgeMono = yob => new Date().getFullYear() - yob
console.log(calcAgeMono(1980));


console.log(window);
console.log(document);


// Arrow function takes the this value from the external scope
document.getElementById('button').addEventListener('click', function () {
  console.log('it works');

  // the keyword this
  console.log(this);


});

// ambito globale

document.getElementById('button').addEventListener('click', () => {
  console.log('it works');

  // the keyword this
  console.log(this);

});







