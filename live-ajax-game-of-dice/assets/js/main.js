/* axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=6&items=2')
  .then(resp => {
    console.log(resp);

  }) */


// Setup 

// Select the dom elements required to play the game
const playerDiceEl = document.querySelector('.player .dice')
const pcDiceEl = document.querySelector('.pc .dice')
const playButtonEl = document.querySelector('.controls .play')
const scoreEl = document.querySelector('.score > h2')


// Elaboration

// When play is clicked:
// - add an event listener to the botton
playButtonEl.addEventListener('click', function () {
  // Empty
  playerDiceEl.innerHTML = ''
  pcDiceEl.innerHTML = ''

  console.log('Playing');
  // - inside the event listener function we can perform an ajax request
  axios.get("https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=6&items=2")
    .then(response => {
      console.log(response);

      const dice = response.data.response; // [3, 5]
      // - destructure the response array and extract the pc and player dice numbers
      const [pcDice, playerDice] = dice
      // /console.log(playerDice, pcDice);

      // - update the dom to print the player dice

      const playerDiceImgEl = document.createElement('img')
      playerDiceImgEl.src = `./assets/img/${playerDice}.png`
      console.log(playerDiceImgEl);
      playerDiceEl.appendChild(playerDiceImgEl)

      // - update the dom to print the pc dice
      const pcDiceImgEl = document.createElement('img')
      pcDiceImgEl.src = `./assets/img/${pcDice}.png`
      console.log(pcDiceImgEl);
      pcDiceEl.appendChild(pcDiceImgEl)


      // - find the winner
      const winner = checkGameWinner(playerDice, pcDice)
      console.log(winner);

      // - update the dom and pint the winner message
      scoreEl.innerHTML = winner

    }).catch(err => console.error(err))

})

function checkGameWinner(playerDice, pcDice) {

  if (playerDice > pcDice) {
    return `You Win! Player: ${playerDice} - Pc: ${pcDice}`
  } else if (pcDice > playerDice) {
    return `You Lose! Player: ${playerDice} - Pc: ${pcDice}`
  } else {
    return "Try Again"
  }


}
