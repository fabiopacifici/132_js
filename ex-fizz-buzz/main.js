console.log('it works');

/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

*/


/*
0. tool: elenca tutti gli strumenti conosciuti
- console.log()
- for loop
- const/let
- if/else
- operators (%, &&)

*/


// 1. preparazione

// 2. raccolta dati

// 3. elaborazione dati


// Scrivi un programma che stampi i numeri da 1 a 100

// creo un ciclo for per iterarare fino a 100
for (let i = 1; i <= 100; i++) {

  // sia multipli di 3 che di 5 stampi FizzBuzz
  // verifico con un if se il numero è divisibile per 15
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  }
  // per i multipli di 3 stampi “Fizz”
  // verifico con un if se il numero è divisibile per 3
  else if (i % 3 === 0) {
    console.log('Fizz');
  }

  // per i multipli di 5 stampi Buzz
  // verifico con un if se il numero è divisibile per 3
  else if (i % 5 === 0) {
    console.log('Buzz');
  }

  // per tutti gli altri numeri stampa il numero
  // uso un elsee per stampare il numero
  else {
    console.log(i);
  }
}





/* for (let i = 1; i <= 100; i++) {

  //console.log(i);

  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  }
  else if (i % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(i);
  }


  //Switch case example
  switch (true) {
    case i % 15 === 0:
      console.log('FizzBuzz');
      break;

    case i % 3 === 0:
      console.log('Fizz');
      break;

    case i % 5 === 0:
      console.log('Buzz');
      break;

    default:
      console.log(i);
      break;
  }


} */

// 4. output finale