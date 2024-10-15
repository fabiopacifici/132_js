console.log('hi');

// 1. setup

// create the data structure for the slider 
const slides = [
  {
    title: 'First Slide',
    image: './assets/img/01.jpg',
    desc: 'This is the first slide'
  },
  {
    title: 'First Slide',
    image: './assets/img/02.jpg',
    desc: 'This is the second slide'
  },
  {
    title: 'First Slide',
    image: './assets/img/03.jpg',
    desc: 'This is the third slide'
  },
  {
    title: 'First Slide',
    image: './assets/img/04.jpg',
    desc: 'This is the fourth slide'
  },
  {
    title: 'First Slide',
    image: './assets/img/05.jpg',
    desc: 'This is the fifth slide'
  },

]

console.log(slides);
// select the dom elements
// query selector

const sliderEl = document.getElementById('slider')
// select the preview element 
const previewEl = document.querySelector('.preview')

// select the current slide element
const currentSlideEl = document.querySelector('.slide')
//console.log(currentSlideEl);
const imageEl = currentSlideEl.querySelector('img');
const titleEl = currentSlideEl.querySelector('.description > h3');
const descEl = currentSlideEl.querySelector('.description > p');

// select the prev element
const prevEl = previewEl.querySelector('.prev')

// select the next element
const nextEl = previewEl.querySelector('.next')

// select the thumbnails container
const thumbsEl = document.querySelector('.thumbnails')

console.log(previewEl, prevEl, nextEl, thumbsEl, currentSlideEl);



// print the current slide into the DOM
let activeSlide = 0

/* currentSlideEl.querySelector('img').src = slides[activeSlide].image
currentSlideEl.querySelector('.description > h3').innerText = slides[activeSlide].title
currentSlideEl.querySelector('.description > p').innerText = slides[activeSlide].desc */


printCurrentSlide(imageEl, titleEl, descEl, slides[activeSlide])
// create a function called printCurrentSlide to print the dom


// 3. Attach event listeners
nextEl.addEventListener('click', next)



prevEl.addEventListener('click', prev)




// Bonus 1: Thumbnails
//let thumbs = ''
for (let i = 0; i < slides.length; i++) {
  // select the object at the current iteration
  const slide = slides[i]
  console.log(slide);

  // create the dom element where put the image 
  //const img = `<img width="120" src="${slide.image}" alt="">`

  //thumbs += img
  const img = document.createElement('img')
  img.src = slide.image
  img.width = 120
  console.log(img);

  //attach event listener on the created dom node
  img.addEventListener('click', function () {
    console.log('clicked on element:', i);
    printCurrentSlide(imageEl, titleEl, descEl, slide)

  });

  thumbsEl.appendChild(img)

}
//thumbsEl.innerHTML = thumbs
// If img is a string you need to select them all again
/* const thumnsNodes = document.querySelectorAll('.thumbnails > img')
console.log(thumnsNodes); */




// Bonus 2: Autoplay 
let intervalId = setInterval(function () {

  // call next to update the image
  next();
  //const sec = new Date().getSeconds()
  //console.log(sec);


  // set the progress to 0 every iteration
  let timeProgress = 0

  //select the progress bar
  const timeProgressEl = document.querySelector('.progress .time')
  console.log(timeProgressEl);

  // increment the timeProgress untill its with is 100
  const timeInterval = setInterval(function () {
    timeProgress++
    timeProgressEl.style.width = timeProgress + '%'
    if (timeProgress === 100) {
      clearInterval(timeInterval)
    }

  }, 20)


  console.log();


}, 2000)

sliderEl.addEventListener('mouseenter', function () {
  clearInterval(intervalId)
})

sliderEl.addEventListener('mouseleave', function () {
  intervalId = setInterval(next, 2000)
})



/* Functions */


function prev() {
  console.log('prev image');


  // increment the active slide counter
  activeSlide-- // -1

  console.log(activeSlide);


  // check if the active slide has reached the array lenght, 
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  //if so go back to the beginning of the array
  printCurrentSlide(imageEl, titleEl, descEl, slides[activeSlide])

}



function next() {
  console.log('next image');

  // increment the active slide counter
  activeSlide++

  console.log(activeSlide);


  // check if the active slide has reached the array lenght, 
  if (activeSlide === slides.length) {
    activeSlide = 0
  }
  //if so go back to the beginning of the array
  printCurrentSlide(imageEl, titleEl, descEl, slides[activeSlide])


}


/**
 * 
 * @param {object} imageEl The image dom element
 * @param {object} titleEl The title dom element
 * @param {object} descEl  the description dom element
 * @param {object} slide the current slide object
 */
function printCurrentSlide(imageEl, titleEl, descEl, slideObj) {

  /* slideObj = {
    title: 'First Slide',
    image: './assets/img/01.jpg',
    desc: 'This is the first slide'
  }, 
  */
  /*   const imageEl = document.querySelector('.slide img');
    const titleEl = document.querySelector('.slide .description > h3');
    const descEl = document.querySelector('.slide .description > p'); */

  const { image, title, desc } = slideObj

  // imageEl =  <img src="" alt="">
  imageEl.src = image
  // titleEl =   <h3>Lorem</h3>
  titleEl.innerText = title
  // descEl =  <p>Lorem, ipsum dolor.</p>
  descEl.innerText = desc
}