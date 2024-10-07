/* 
Palidroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma
*/

console.log("Palidroma");

/* 0. tools
- const/let
- prompt

*/


// 1. data preparation
let word;

// 2. data collection

// Chiedere all’utente di inserire una parola
word = 'level';


// 3. data elaborazione


// Creare una funzione per capire se la parola inserita è palindroma
/**
 * 
 * @param {string} word The word to check
 */
function is_palindrom(word) {

  // check if the work is a palindrom


  // [SPLIT] ciclo nella stringa seleziono ciascun carattere lo inserisco in un array
  // splitto la stringa in un array di caratteri
  //let word_splitted = word.split('')
  let word_splitted = split(word.toLowerCase())
  console.log(word_splitted);

  // [reverse] create a new array with the characters from right to left
  // inverto l'ordine dei caratteri dell'array
  //let rev_array = word_splitted.reverse()
  let rev_array = reverse(word_splitted)
  console.log(rev_array);

  // [JOIN] recreate a word from the reversed array
  // ricreo la parola unendo i caratteri dell'array rovesciata
  //let rev_word = rev_array.join('')
  let rev_word = join(rev_array)
  console.log(rev_word);


  // in one line
  //const rev_word = word.split('').reverse().join('');

  if (word.toLowerCase() === rev_word) {
    return true
  }
  return false

}

console.log(is_palindrom(word));


// 4. output

// invoke the function and return the output to the user

if (is_palindrom(word)) {
  console.log('É un palindromo');

} else {
  console.log('Non é un palindromo');
}







/* Helper Functions  */
/**
 * 
 * @param {string} word the word to split 
 * @returns {array}
 */
function split(word) {

  console.log(word.length);

  const stringAsArray = []

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    stringAsArray.push(char)
  }

  return stringAsArray;


}
console.log(split(word))


/**
 * 
 * @param {array} array_of_characters the array to reverse
 * @returns {array} 
 */
function reverse(array_of_characters) {

  // read the elemetns of the array from right to left 👈
  const reversed_array = []
  for (let i = array_of_characters.length - 1; i >= 0; i--) {
    const char = array_of_characters[i];
    console.log(char);
    reversed_array.push(char)
  }

  return reversed_array

}

//console.log(reverse(['f', 'a', 'b', 'i', 'o']))

// 0           1          2
//['ciao', 'arrivederci', 'yo'] // array.length 3


function join(array_of_characters) {


  // creo una variabile [result] dove salvare la nuova stringa
  let result = '';
  // prendo ogni elemento dell'array e lo sommo alla variabile [result]

  // ciclo nell'array di caratteri

  for (let index = 0; index < array_of_characters.length; index++) {
    const element = array_of_characters[index];
    result += element

  }

  //console.log(result);
  return result


}

//join(['f', 'a', 'b', 'i', 'o'])