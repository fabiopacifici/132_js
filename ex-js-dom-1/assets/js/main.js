console.log('it works');


/*
Consegna
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)




BONUS
Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
Per fare questo bonus potremmo aver bisogno del metodo string.includes() :wink:

*/


// -1. Al click del bottone, la lampadina dovrà accendersi
//(dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)


// 1. setup

// select the bulb image from the dom 
const lampImgEl = document.querySelector('.bulb');
// select the button from the dom
const buttonEl = document.querySelector('button');

//console.log(lampImgEl, buttonEl);


// 2. event listeners

// attach an eventlistener to the button
buttonEl.addEventListener('click', () => {

  // call a function that will change the image src attribute to the one of the lightbulb on the dom.
  //console.log(this); // windows object (if arrow function)
  //console.log(this); // node object (with standard function)

  //console.log(lampImgEl.src);

  //console.log(lampImgEl.getAttribute('src'), lampImgEl.getAttribute('src').includes('yellow'));

  const is_on = lampImgEl.getAttribute('src').includes('yellow');
  console.log(is_on);

  // if the src attributes includes the word yellow then change the button text to 'turn off'
  if (is_on) {
    // turn off the ligth bulb 
    lampImgEl.setAttribute('src', './assets/img/white_lamp.png');
    buttonEl.textContent = 'Accendi';

  } else {
    // turn on the light bulb
    //lampImgEl.src = './assets/img/yellow_lamp.png';
    lampImgEl.setAttribute('src', './assets/img/yellow_lamp.png');
    //console.log(lampImgEl.getAttribute('src'));

    // change the button text
    buttonEl.textContent = 'Spegni';

  }
  // otherwise change it to 'turn on'


})






