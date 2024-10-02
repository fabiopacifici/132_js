/* Conditional statements 
- if
- (condition)
- {//you code here}

# syntax only

if (condition) {
  // your code here
}

*/


// Only if statement
const x = 12
if (x > 10) {
  console.log('X is greather than 10: ', x);
}

// if else
const y = '0';
// the identical to zero as number because its a numeric string
if (y === 0) {
  console.log(`Y is zero and a number`, y);

} else {
  console.log(`Y:${y} is not equal to 0`);
}


// else if
const is_running = false;
if (is_running) {
  console.log('This code runs if is_running is true');

} else if (is_running == false) {
  // code to run
  console.log('This runs if is_running is false');
}



// if/else with (and, or, not)

// not

// if is monday is true with the negation it become false and vice versa
const is_monday = false;
// is_monday = true -> !is_monday = false
// is_monday = false -> !is_monday = true

if (!is_monday) {
  console.log("It's not monday! Enjoy the rest of the week");
}

// AND
const z = 10;

// x > z -> 12 > 10 -> true
if (x > z && !is_monday) {
  console.log('two conditional expressions with AND must be true');

}

// or
if (x > z || is_monday) {
  console.log('just one condition must be true to get a true');

}



/* You can have all else if you want

if (contion) {
  // code ..
} else if (condition) {
  // code ..
} else if (condition) {
  // code ..
} else if (condition) {
  // code ..
} else if (condition) {
  // code ..
} else if (condition) {
  // code ..
}
*/

// else is optional add if you need it.

// Prompt
const word = prompt('Type a word')
console.log(word);

// Alert
alert(word)


// Date
const now = new Date();
alert(now);
console.log(now.getDay(), now.getFullYear());



// Math

const randomNumber = Math.random()
alert(randomNumber);
console.log(randomNumber);




