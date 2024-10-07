console.log('it works');


/*

## Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.


// tools
- Math.random
- Math.floor || Math.ceil || Math.round
- let/const
- if/else
- console.log

*/



/* // 1. preparazione
let playerNumber;
let pcNumber;
let message;
// 2. raccolta dati
playerNumber = Math.floor(Math.random() * 6) + 1;
pcNumber = Math.floor(Math.random() * 6) + 1;

console.log(playerNumber, pcNumber);

// 3. elaborare
if (playerNumber > pcNumber) {
  // you win
  message = `You win! Player number: ${playerNumber} | PC number: ${pcNumber}`;
} else if (pcNumber > playerNumber) {
  // you loose
  message = `You loose, PC wins! Player number: ${playerNumber} | PC number: ${pcNumber}`
} else {
  // pari
  message = `Try Again! Player number: ${playerNumber} | PC number: ${pcNumber}`
}

// 4. mostra l'output
alert(message); */



// keep the game going

let wannaPlayAgain = true;

while (wannaPlayAgain) {
  // 1. preparazione
  let playerNumber;
  let pcNumber;
  let message;
  // 2. raccolta dati
  playerNumber = Math.floor(Math.random() * 6) + 1;
  pcNumber = Math.floor(Math.random() * 6) + 1;

  console.log(playerNumber, pcNumber);

  // 3. elaborare
  if (playerNumber > pcNumber) {
    // you win
    message = `You win! Player number: ${playerNumber} | PC number: ${pcNumber}`;
  } else if (pcNumber > playerNumber) {
    // you loose
    message = `You loose, PC wins! Player number: ${playerNumber} | PC number: ${pcNumber}`
  } else {
    // pari
    message = `Try Again! Player number: ${playerNumber} | PC number: ${pcNumber}`
  }

  // 4. mostra l'output
  alert(message);
  wannaPlayAgain = confirm('Do you want to keep playing?')
}

alert('Thank you! See you later');






