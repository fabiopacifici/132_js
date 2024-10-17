/* 
Descrizione:

Scrivere un programma che chieda all’utente:

Il numero di chilometri da percorrere
Età del passeggero 

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1: 
Iniziamo implementando il programma senza alcuna estetica: 
- usando esclusivamente due input e 
- un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2: 
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/


/* 
Tools: 
- cosnt/let
- eventlistener
- queryselector/getElements
- functions
- if/else
- event (event.target optional)

*/




// 1. Get the form input fields and the form 

// selet the form
const formEl = document.getElementById('ticket-form'); // <form></form>
//console.log(formEl);

// selet the inputs
/* const fullnameInputEl = document.getElementById('fullname'); // <input>
console.log(fullnameInputEl); */

// selet the km input
/* const kmInputEl = document.getElementById('km') // <input>
console.log(kmInputEl);
 */
// select the age range select tag
/* const ageRange = document.getElementById('ageRange')
console.log(ageRange); */


// select the reset button
const resetBtnEl = document.querySelector('[type="reset"]')
//console.log(resetBtnEl);

// select the ticket section area
const ticketSectionEl = document.getElementById('ticket')
//console.log(ticketSectionEl);

// define the price per km
// create a varaible where store the cost per km
const pricePerKm = 0.21
//console.log(pricePerKm);



// 2. Elaboration

// attach an event listener to the form, listening for submit event
formEl.addEventListener('submit', function (e) {
  e.preventDefault()

  // calculatesTicketPrice()
  //console.log(e.target.fullname.value, e.target.km.value, e.target.ageRange.value);
  //console.log(kmInputEl.value, ageRange.value);

  // - read the value of the input fullname
  const fullName = e.target.fullname.value;
  // - read the value of the input km
  const km = Number(e.target.km.value);
  console.log(km);

  // - read the value of the age range selection
  const ageRange = e.target.ageRange.value;
  console.log(ageRange);

  // calculate the standard price by multipling price per km and the km values
  let finalPrice = pricePerKm * km
  console.log(finalPrice);

  let discount;
  let offertType = 'Biglietto standard'

  // check the user age

  // - if the user is a minor
  if (ageRange === 'minor') {
    // apply a 20% discount to the standard price
    discount = 0.2
    //finalPrice =  finalPrice - (finalPrice * discount)
    finalPrice -= finalPrice * discount // shortcut
    offertType = 'Biglietto Minori'

  }
  // - else if the user is a senior
  // apply a discount of 40%
  else if (ageRange === 'senior') {

    discount = 0.4
    finalPrice -= finalPrice * discount
    offertType = 'Biglietto Senior'

  }

  // - otherwise its an adult no discount
  // apply the standard price

  // toFixed returns a string. convert it back to a number if necesserary
  const roundedFinalPrice = parseFloat(finalPrice.toFixed(2));
  console.log(roundedFinalPrice);


  // generate a randon number for the wagon number
  const wagon = generateRandomInteger(1, 10);
  // generate a random number for the cp_code
  const cp_code = generateRandomInteger(80000, 99000);


  // Update the dom to print the generated ticket
  // generateTicket()

  // generate the ticket markup to insert into the ticket section
  const markup = generateTicketMarkup(fullName, offertType, roundedFinalPrice, wagon, cp_code)
  // update the section innerHTML


  // [single ticket ] updated the dom adding only one ticket at the time
  //ticketSectionEl.innerHTML = markup


  // [multiple tickets] updated the dom adding more than one ticket at the time
  //ticketSectionEl.innerHTML += markup
  ticketSectionEl.insertAdjacentHTML('afterbegin', markup)

})

console.log('After the listener');


/**
 * This function generates a markup for the ticket
 * @param {string} fullName the fullname
 * @param {string} offertType the offer name
 * @param {float} finalPrice the final price
 * @param {number} wagon the wagon number
 * @param {number} cp_code the cp code
 * @returns string
 */
function generateTicketMarkup(fullName, offertType, finalPrice, wagon = 4, cp_code = 1234) {
  return `
      <div class="card">
        <div class="card-body d-flex gap-2">
          <div class="passenger bg-light p-2">
            <h2>Passenger Name</h2>
            <h4>${fullName}</h4>
          </div>
          <div class="ticket_details d-flex align-items-center">
            <div>
              <h6>Offer</h6>
              <div>
                ${offertType}
              </div>
            </div>
            <div>
              <h6>Wagon</h6>
              <div>
                ${wagon}
              </div>
            </div>
            <div>
              <h6>Cp code</h6>
              <div>
                ${cp_code}
              </div>
            </div>
            <div>
              <h6>Ticket price</h6>
              <div>
                ${finalPrice}
              </div>
            </div>
          </div>
        </div>
      </div>
  `
}


function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}











