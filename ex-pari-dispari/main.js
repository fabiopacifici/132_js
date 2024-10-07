console.log('it works');


/* 

Pari e Dispari
- L’utente sceglie pari o dispari 
- inserisce un numero da 1 a 5. 
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
- Sommiamo i due numeri 
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
- Dichiariamo chi ha vinto.


0. tools
- const/let
- prompt
- Math.random/Math.floor
- functions
- matematical operator (+, %)
- if/else

*/


// 🤓 1. data preparation

let playerChoice, playerNumber, pcNumber;

// 🤓 2. data collection

// - L’utente sceglie pari o dispari
playerChoice = 'pari' // prompt('chose pari o dispari, ex: [pari/dipari]' )

// - inserisce un numero da 1 a 5. 
playerNumber = 3 // Number(prompt('pick a number between 1 and 5 ex. 4'));


// - Generiamo un numero random (sempre da 1 a 5) per il computer
pcNumber = getRandomNumber(1, 5);
console.log(pcNumber, playerNumber);

// - Sommiamo i due numeri
const sum = playerNumber + pcNumber;

// 🤓 3. data elaborazione

// - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const result = is_even(sum);
console.log(result);


// 🤓 4. output

// check if the player won
if (playerChoice === 'pari' && is_even(sum)) {
  console.log('Player wins');

} else {
  console.log('You lose! PC wins');

}




/* Helper Functions */

/**
 * Generates a random number between a min and a max
 * @param {number} min The min number to use in the range
 * @param {number} max The max number to une in the range 
 * @returns {number}
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * 
 * checks if the given number is even or odd
 * return true is even
 * otherwise false
 * @param {number} numb The number to check 
 */
function is_even(numb) {

  if (numb % 2 === 0) {
    return true
  }
  return false //oppure numb % 2 === 0
}