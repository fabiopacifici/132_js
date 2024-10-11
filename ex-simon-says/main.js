/*
Descrizione:
**Visualizzare in pagina 5 numeri casuali**.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece **5 input** in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.


BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
*/

// 1. setup
const displayEl = document.querySelector('.display');
console.log(displayEl);
const guessEl = document.querySelector('.guess_numbers');
console.log(guessEl);
const formEl = document.querySelector('form');
console.log(formEl);

// Generate random numbers
const randNumbers = generateRandomNumbers(5)
console.log(randNumbers);

// print them to the dom
displayEl.innerHTML = randNumbers.join(',')

setTimeout(() => {
  // hide them after 30 seconds
  displayEl.innerHTML = '';
  // show the form after 30 seconds
  guessEl.classList.remove('d-none');

}, 1000)

let guess_numbers;
// attach an event to the form
formEl.addEventListener('submit', function (e) {
  e.preventDefault()
  // read the values submitted
  guess_numbers = [
    Number(e.target.numb_1.value),
    Number(e.target.numb_2.value),
    Number(e.target.numb_3.value),
    Number(e.target.numb_4.value),
    Number(e.target.numb_5.value),
  ]

  console.log('numbers to guess', randNumbers);

  console.log('numbers guessed', guess_numbers);

  const guessedCorrectly = findScore(guess_numbers, randNumbers);
  console.log(guessedCorrectly, guessedCorrectly.length);
  // print the output
  printScore(displayEl, guessedCorrectly, guessEl)


})



/**
 * 
 * @param {*} displayEl 
 * @param {*} guessedCorrectly 
 * @param {*} guessEl 
 */
function printScore(displayEl, guessedCorrectly, guessEl) {
  displayEl.innerHTML = `score:${guessedCorrectly.length} | You found: ${guessedCorrectly.join(',')}`
  guessEl.classList.add('d-none')
}


/**
 * 
 * @param {*} guess_numbers 
 * @param {*} randNumbers 
 * @returns 
 */
function findScore(guess_numbers, randNumbers) {
  // store the numbers guessed correctly
  const guessedCorrectly = []
  // check if the guessed number is included
  for (let index = 0; index < guess_numbers.length; index++) {
    const numb = guess_numbers[index];

    // check if the random numbers includes the submitted number
    if (randNumbers.includes(numb)) {
      // if found save it to a different array
      guessedCorrectly.push(numb)
    }

  }
  return guessedCorrectly;
}



/* Functions */
/**
 * 
 * @param {*} max 
 * @returns 
 */
function generateRandomNumbers(max) {

  const randNumbers = []
  for (let i = 0; i < max; i++) {
    const numb = Math.ceil(Math.random() * 100)
    randNumbers.push(numb)
  }

  return randNumbers

}