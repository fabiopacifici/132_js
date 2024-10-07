//console.log('it works');


/* 
## Mail

- Chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere,
- stampa un messaggio appropriato sull’esito del controllo.


0. tools:
- const/let
- prompt
- array
- for
- if
- console.log


1. preparazione 

2. raccolta dei dari

3. elaborazione dati (data precessing) 

4. output


*/




// praparazione
let userEmail;
let participants;
let message;
let canAccess;

// raccolta dati
canAccess = false;
userEmail = prompt('type your email address')
participants = [
  'booldev@gmail.com',
  'support@boolit.io',
  'admin@boolpro.com',
  'info@boolassist.net'
];
//console.log(canAccess, userEmail, participants);


// 3. elaborazione dati (data precessing) 

//canAccess = participants.includes(userEmail)
// scorro all'interno dell'array
for (let i = 0; i < participants.length; i++) {
  // selezioni il singolo elemento dell'array
  const thisParticipant = participants[i];
  //console.log(thisParticipant);

  // controlla se questo partecipante é lo stesso della user email
  if (thisParticipant == userEmail) {
    // if true la variabile canAccess puó diventare true altrimenti resta false.
    canAccess = true;
    break;
  }

}

console.log(canAccess);


// Output

if (canAccess) {
  alert('welcome');

} else {
  alert('go home');

}

