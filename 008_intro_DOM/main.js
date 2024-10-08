console.log('it works');

// select a dom element by id
const divEl = document.getElementById('saluto')
const aboutEl = document.getElementById('about');
// log the element to the console
console.log(divEl, aboutEl);
// log the type of the element
console.log(typeof divEl, typeof 'ciao', typeof 10);




// 📌 select by the query selector class name
// same css selection
const contactsEl = document.querySelector('.contacts');
console.log(contactsEl);


// call element.method to manipulate the element

// 👉 access the value of the css class name via element.className
console.log(contactsEl.className);

// 📌 [READ] access the class list of an element via classList
console.log(contactsEl.classList);

// [WRITE] add a new class to the element
contactsEl.classList.add('bg-dark', 'text-white');
console.log(contactsEl.classList);

// [REMOVE] remove a class from an element via classList
contactsEl.classList.remove('py-2')

// get the lengt of the class list elements

console.log(contactsEl.classList.length)



// 📌 Get the inner html

//  [READ] access the inner HTML of an element via innerHTML  
console.log(contactsEl.innerHTML);

// [WRITE] change the inner HTML of an element via innerHTML

contactsEl.innerHTML = 'Hello World';

console.log(contactsEl.innerHTML);


const firstName = 'Mario';

contactsEl.innerHTML = `
<h1>Hello ${firstName}</h1>
<p>lorem</p>
`;




// 📌 Style property
// [write] change the style of an element via style
contactsEl.style.borderRadius = '1rem';
// [read] the style of an element via style
console.log(contactsEl.style.borderRadius);



//console.log(contactsEl.style);


// 📌Event Listeners

const buttonEl = document.querySelector('button');
console.log(buttonEl);

buttonEl.addEventListener('click', function () {
  // this is equal to the node element that triggered the event
  console.log('clicked', this)

  // change the button color using the this
  this.style.backgroundColor = 'red';


})



const headerEl = document.querySelector('header');

buttonEl.addEventListener('click', () => {
  console.log('clicked', this)
  headerEl.classList.add('bg-primary', "py-3")
})



// 📌 input value

const inputEl = document.getElementById('first-name');
console.log(inputEl);

const addFirstNameButtonEl = document.getElementById('addFirstName')
console.log(addFirstNameButtonEl);



addFirstNameButtonEl.addEventListener('click', () => {
  console.log(inputEl.value)

  headerEl.innerText = `Hello ${inputEl.value}`


})



