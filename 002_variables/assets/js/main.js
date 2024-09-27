console.log('Ciao');
console.log("Ciao");


/* Data types (primitives)

- strings
- numbers

*/

/* 👉 Strings */
// This is a string
'ciao 1';
"ciao 2";

// This is another string
"ciao 2";

console.log('ciao 1');
console.log('ciao 2');

console.log('4');




/* 👉 Numbers */

// This is an integer number
4
5
6

console.log(4);
console.log(5);
console.log(6);



/* Variables */

// How to define variables correctly

// ❌ myfirstvariable
// ❌ 12myvariable
// ❌ 12myva$&$%variable

// ✅ mySecondVariable
// ✅ my_third_variable


// Varable declaration
let first_name;
var last_name;

// const variables must be initialized
//const age; // ❌ Uncaught SyntaxError: Missing initializer in const declaration (at main.js:48:7)

// print a variable into the console
console.log(first_name, last_name); // undefined undefined

// Attach a value to the variable
// Assegnazione
first_name = 'Luca';
console.log(first_name);

// assegnazione
first_name = 'Marco';
console.log(first_name);


last_name = 'Bianchi';


// variable initialization
const age = 30;
console.log(age);

let my_cat_name = 'Antifa';

console.log(my_cat_name);
// assegnazione valore alla variabile con `=`
my_cat_name = 'Antifa';



// Must stay the same value (NEVER CHANGES ITS VALUE)
//age = 'Ho 45 anni'; // ❌ Uncaught TypeError: Assignment to constant variable. (at main.js:71:9)



/* Declaration vs Initialization */

// declaration
let my_first_variable;

// Initialization after a declaration
my_first_variable = 'Luca';


// Initialization
let my_second_variable = 'Marco';


/* String Contatenation */

// Concatenation with the operator (+)

// initialize a variable
let full_name = first_name + ' ' + last_name; // with space
// initialize a different variable
let another_first = first_name + last_name; // without space

console.log(full_name, another_first); // Marco Bianchi MarcoBianchi


/* Reading order of js code */

let anakin = 'Anakin';

console.log(anakin);


anakin = 'Obi-Wan';

console.log(anakin);




/* Declare and use later */

//console.log(dog); // main.js:139 Uncaught ReferenceError: Cannot access 'dog' before initialization

let dog = 'Lady';

console.log(dog);


//console.log(another_dog); //main.js:144 Uncaught ReferenceError: Cannot access 'another_dog' before initialization

const another_dog = 'Lady';


console.log(another_dog);


console.log(my_age);

var my_age = 'Ho 35 anni';

console.log(my_age);



/******************************
 * Primitive data types
 * *************************** */

// String (also an object)

//let laptop = 'MacBook Pro';
//let laptop = "MacBook Pro";

// 👉  String contactenation options
//let laptop = "Macbook" + " " + "Pro";
//let laptop = "Macbook" + " Pro";

// Backtick string interpolation
// Backtick: MAC Alt + Backslash; WIN ALT + 96;

const price = 2000;
//let laptop = "Macbook Pro: " + price;
//let laptop = `Macbook Pro: price`;  // Macbook Pro: price
let laptop = `Macbook Pro: ${price}` // Macbook Pro: 2000; 

console.log(laptop);

console.log(`My 
cat 
name 
is
${anakin}`);



// Strings methods

//        0123
// dog = "Lady";
console.log(dog.charAt(0)); // L
console.log(dog.length);

/* Numbers */

let sum = 5 + 5;
console.log(sum);

let result = 5 + sum;
console.log(result);


let multify = 10 * 2 * result;
console.log(multify);

let a = 200;
let b = 100;

let c = a - b;
console.log(c);


// floating point numbers
let d = 5 / 3;
console.log(d);
console.log(d.toString());

console.log(`ciao ${c}`);




























