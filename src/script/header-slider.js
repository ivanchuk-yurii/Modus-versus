const next = document.querySelector('#header-next');
const prev = document.querySelector('#header-prev');
const dots = document.querySelector('#header-dots');
const carousel = document.querySelector('#header-carousel');
const width = carousel.children[0].width;
let currentSlide = 1;

function createArrowHandler(control) {
  let moveSlide;

  switch (control) {
    case 'prev':
      moveSlide = a => {
        return a - 1;
      };
      break;
    case 'next':
      moveSlide = a => {
        return a + 1;
      };
      break;
  }

  return () => {
    if (!carousel.children[moveSlide(currentSlide)]) {
      return;
    }

    dots.children[currentSlide].classList.remove('header__rectangle-active');
    currentSlide = moveSlide(currentSlide);
    carousel.style.transform = `translate(-${currentSlide * width}px)`;
    dots.children[currentSlide].classList.add('header__rectangle-active');
  };
}

function dotHandler(event) {
  const dot = event.target;

  if (!dot.matches(".header__rectangle") || dot.matches(".header__rectangle-active")) {
    return;
  }

  dots.children[currentSlide].classList.remove('header__rectangle-active');
  currentSlide = +dot.dataset.dot;
  carousel.style.transform = `translate(-${currentSlide * width}px)`;
  dot.classList.add('header__rectangle-active');
}

next.addEventListener('click', createArrowHandler('next'));
prev.addEventListener('click', createArrowHandler('prev'));
dots.addEventListener('click', dotHandler);
