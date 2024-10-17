//log

console.log('bart');


/* 
Bart è stato messo in punizione dalla maestra Caprabal. Quando clicchi su Bart chiedi con un prompt cosa deve scrivere alla lavagna e quante volte. Poi Bart scrive la frase alla lavagna!

**BONUS:** se Bart riceve dati sbagliati dal prompt, griderà “Ciucciati il calzino!” altrimenti “che pizza!”

*/



// 1. preparazione 


// select the board where the message will be printed
const boardEl = document.querySelector('.blackboard');
// select bart from the dom
const bartEl = document.querySelector('.bart');


// 2. elaboration

// create a for loop that print the message the number of times asked by user

/* for (let i = 0; i < times; i++) {

  // write the sentence to the board

}
 */
bartEl.addEventListener('click', () => {

  // create variable where save the prompt from the user (scrivi una frase)
  let message = prompt('Scrivi una frase');

  // create another variable where store the number of times the message has to be printed (quante volte scrivi la frase)
  let times = Number(prompt('Quante volte vuoi che sia scritta?'));
  // log to the console the results
  console.log(message, times);


  // check if message is not empty, check if times not NaN,check if times is not less than 1
  console.log();

  if (message.length < 5 || isNaN(times) || times < 1) {
    alert('Ciucciati il calzino')
    return;
  }

  // call a function that prints the message the number of times asked by user

  for (let i = 0; i < times; i++) {

    // write the sentence to the board
    const pEl = document.createElement('p')
    pEl.append(message)
    console.log(pEl);
    boardEl.appendChild(pEl)

  }

});