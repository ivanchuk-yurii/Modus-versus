const carousel = document.querySelector('#features-carousel');
const next = document.querySelector('#features-next');
const prev = document.querySelector('#features-prev');
let curentSlide = 0;

function createHandler(control) {
  let moveSlide;

  switch (control) {
    case 'prev':
      moveSlide = (a, b) => {
        return a - b;
      };
      break;
    case 'next':
      moveSlide = (a, b) => {
        return a + b;
      };
      break;
  }

  return () => {
    if (control === 'prev' && !carousel.children[moveSlide(curentSlide, 1)]) {
      return;
    }

    if (control === 'next' && !carousel.children[moveSlide(curentSlide, 6)]) {
      return;
    }

    const transformation = carousel.children[0].getBoundingClientRect().left
    - carousel.children[moveSlide(curentSlide, 1)].getBoundingClientRect().left;

    carousel.style.transform = `translate(${transformation}px)`;
    curentSlide = moveSlide(curentSlide, 1);
  };
}

next.addEventListener('click', createHandler('next'));
prev.addEventListener('click', createHandler('prev'));
