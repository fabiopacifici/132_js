/* Esempio di funzioni giá viste */

//console.log('Fabio'); // Fabio


//console.log(['Fabio', 'Mario']);

/* alert('Ciao')
alert('Arrivederci')

prompt('Type a number')
prompt('Type a name') */


// Function declaration

// function without parameters
function logAString() {
  // your code here 
  console.log('Function without parameters');

}

// call a function (invoke)
logAString(); // Function without parameters
logAString(); // Function without parameters
logAString(); // Function without parameters
logAString(); // Function without parameters


// with parameters
function legTheGivenMessage(message) {
  // your code here 
  console.log(message);

}
legTheGivenMessage('Ciao') // ciao
legTheGivenMessage('Hi') // ciao
legTheGivenMessage('Ao') // ciao


// real world example

/**
 * The function logs the sum of two number 
 * @param {number} numb_1 the first number to sum
 * @param {number} numb_2 the second number to sum
 */
function log_the_sum__of_two_numbers(numb_1, numb_2) {
  const sum = numb_1 + numb_2;
  console.log(sum);
}

log_the_sum__of_two_numbers(10, 100)
log_the_sum__of_two_numbers(100, 100)
log_the_sum__of_two_numbers('ciao', 'ciao')



function show_an_alert_of_two_numbers_sum(numb_1, numb_2) {
  const sum = numb_1 + numb_2;
  alert(sum);
}

//show_an_alert_of_two_numbers_sum(12, 999)



// function that returns a value

function return_the_sum__of_two_numbers(numb_1, numb_2) {
  // Local scope (function scope)
  const sum = numb_1 + numb_2;

  return sum

}

//console.log(sum);//  main.js:79 Uncaught ReferenceError: sum is not defined


const result = return_the_sum__of_two_numbers(10, 5);
console.log(result);




// You need to invoke a funcion to execute its code

// THE PROBLEM
// calculate the user age 1
/* const userYearOfBirth = 1980;
const currentYear = new Date().getFullYear()
const userAge = currentYear - userYearOfBirth;

console.log(userAge); */


// calculate the user age 2

/* const userYearOfBirth_2 = 1950;
const currentYear_2 = new Date().getFullYear()
const userAge_2 = currentYear_2 - userYearOfBirth_2;

console.log(userAge_2);
 */

// calculate the user age 3


/* const userYearOfBirth_3 = 1900;
const currentYear_3 = new Date().getFullYear()
const userAge_3 = currentYear_3 - userYearOfBirth_3;

console.log(userAge_3); */



// THE SOLUTION

console.log(ageCalculator(2010)); // 


// function declaration
// given the year of birth of a user returns its age
function ageCalculator(userYearOfBirth) {
  // function scope
  // all variables stay inside
  const currentYear = new Date().getFullYear()
  const userAge = currentYear - userYearOfBirth;

  // to get the value of a variable outside of the function
  // you MUST return it.
  return userAge;
}
// invole the function


//const fabioYob = prompt("What's your age")
//const fabioAge = ageCalculator(fabioYob)
const marioAge = ageCalculator(1920)
const lukeAge = ageCalculator(1800)
const futureManAge = ageCalculator(2500)

//console.log(fabioAge, marioAge, lukeAge, futureManAge);


/* if (fabioAge > 55) {
  console.log('Its time to retire');
} */



// hoisting




