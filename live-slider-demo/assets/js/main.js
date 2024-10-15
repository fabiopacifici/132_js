// 1.setup

const slides = [
  {
    image: './assets/img/01.jpg',
    title: 'Title first slide',
    desc: 'lorem ipsul dolor sit amet'
  },
  {
    image: './assets/img/02.jpg',
    title: 'Title second slide',
    desc: 'lorem ipsul dolor sit amet'
  },
  {
    image: './assets/img/03.jpg',
    title: 'Title third slide',
    desc: 'lorem ipsul dolor sit amet'
  },
  {
    image: './assets/img/04.jpg',
    title: 'Title first slide',
    desc: 'lorem ipsul dolor sit amet'
  },
  {
    image: './assets/img/05.jpg',
    title: 'Title fifth slide',
    desc: 'lorem ipsul dolor sit amet'
  }
]

let currentSlide = 0

// SELECT DOM NODES
// select the preview element from the dom
const previewEl = document.querySelector('.preview')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')


// print the current slide
printCurrentSlide(previewEl.querySelector('img'), previewEl.querySelector('h3'), previewEl.querySelector('p'), slides[currentSlide])
console.log(previewEl);

// 2. attach event listeners
nextEl.addEventListener('click', next)

prevEl.addEventListener('click', prev)


function printCurrentSlide(imageEl, titleEl, textEl, slide) {
  const { image, title, desc } = slide;
  imageEl.src = image
  titleEl.innerText = title
  textEl.innerText = desc

}

function next() {
  console.log('next image');
  // select the currect slide
  currentSlide++

  if (currentSlide >= slides.length) {
    currentSlide = 0
  }
  printCurrentSlide(previewEl.querySelector('img'), previewEl.querySelector('h3'), previewEl.querySelector('p'), slides[currentSlide])


}

function prev() {
  console.log('prev image');
  currentSlide--

  if (currentSlide < 0) {
    currentSlide = slides.length - 1
  }
  printCurrentSlide(previewEl.querySelector('img'), previewEl.querySelector('h3'), previewEl.querySelector('p'), slides[currentSlide])
}

// 4. Bonus: thumbails

for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  //const img = `<img src="${slide.image}" alt="">`
  const img = document.createElement('img')
  img.src = slide.image
  img.addEventListener('click', function () {
    printCurrentSlide(previewEl.querySelector('img'), previewEl.querySelector('h3'), previewEl.querySelector('p'), slides[i])
  })
  document.querySelector('.thumbnails').appendChild(img)
  //thumbsMarkup += img
}

