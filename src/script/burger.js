const burger = document.getElementById('burger');
const list = document.getElementById('nav-list');

function handler() {
  list.classList.toggle('nav-list-active');
  burger.classList.toggle('burger-active');
}

burger.addEventListener('click', handler);
