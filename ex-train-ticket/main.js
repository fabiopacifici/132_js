console.log('it works');


/* AI Prompt 

Il tuo compito é di aiutarmi durante lo svolgimento degli esercizi del corso fullstack web development che sto seguendo. Non darmi la soluzione ma aiutami a ragionare sul problema. Non scrivere codice. Act as a personal tutor, dammi dei suggerimenti per farmi arrivare in autonomia alla soluzione.
ti per farmi arrivare in autonomia alla soluzione.


*/


/* 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km) 
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/



// 0. Strumenti conosciuti:
/* 
- let, const
- prompt
- console.log
- operatori aritmetici e di comparazione ralazionali e logici
- string
- numbers 
- conditionals if/elseif/else

*/


// 1. Preparazione

// Dichiaro la variabile che conterra i km che l'utente vuole percorrere
let km;
// Dichiaro la variabile che conterra l'etá dell'utente
let user_age;
// Dichiaro la variabile che conterrá il prezzo al km 0.21
let price_per_km;
// Dichiaro una variabile che mostri il prezzo finale
let final_price;

let message;
// 2. Raccolta dati

// assegno alla viabile dei km da percorrere il risultato del prompt richiesto all'utente
km = Number(prompt('Quanti KM vuoi percorrere? es: 10'))
// assegno alla variabile dell'eta utente il risultato del prompt
user_age = Number(prompt('Quale é l \'etá dal passeggero?')) // escape \'

// assegno il valore forito per il prezzo al km
price_per_km = 0.21

// stampo le variabili con i dati raccolti dall'utente
console.log(km, user_age, price_per_km);


// 3. Elaborazione

// Calcolo il prezzo del biglietto iniziale senza sconti
final_price = km * price_per_km;
console.log(final_price);

// se user_age é minore di 18 allora applico lo sconto del 20%
if (user_age < 18) {
  // code ..
  // calcorare lo sconto del 20% sul prezzo totale del biglietto
  const discount = final_price * 0.2
  console.log(discount);

  // applico lo sconto al prezzo finale
  final_price -= discount
  // aggiorno la viabile message con un messaggio appropriato
  message = `Ciao il costo del tuo biglietto é: ${final_price.toFixed(2)} - Discount applied 20%`

}
// se user_age é maggiore di 65 applico lo sconto del 40%
else if (user_age > 65) {

  // calcorare lo sconto del 40% sul prezzo totale del biglietto
  const discount = final_price * 0.4
  //console.log(discount);

  // applico lo sconto al prezzo finale
  final_price -= discount
  //console.log(final_price);
  // aggiorno la viabile message con un messaggio appropriato
  message = `Ciao il costo del tuo biglietto é: ${final_price.toFixed(2)} - Discount applied 40%`

}
// altrimeti il prezzo é pieno
else {
  // nessuno sconto da applicare al prezzo finale
  // aggiorno la viabile message con un messaggio appropriato
  message = `Ciao il costo del tuo biglietto é: ${final_price.toFixed(2)} - Standard Price`

}



// 4. Output"""
console.log(message);
