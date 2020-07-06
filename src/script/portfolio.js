const button = document.getElementById('portfolio-btn');
const list = document.getElementById('portfolio-list');

function buttonHandler() {
  button.classList.toggle('nav-list__link-active');
  list.classList.toggle('nav-list__portfolio-list-active');
}

function windowHandler(event) {
  if (event.target.closest('#portfolio-btn')) {
    return;
  }

  button.classList.remove('nav-list__link-active');
  list.classList.remove('nav-list__portfolio-list-active');
}

button.addEventListener('click', buttonHandler);
document.addEventListener('click', windowHandler);
