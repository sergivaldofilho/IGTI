// window.addEventListener('load', start);

start();

function start() {
  console.log('Aula formulário');
  console.log('Pagina totalmente carregada');

  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

function preventSubmit(event) {
  event.preventDefault();

  var nameInput = document.querySelector('#nameInput');
  alert(nameInput.value + ' cadastrado com sucesso');
}

function countName(event) {
  var count = event.target.value;

  var span = document.querySelector('#nameLenght');
  span.textContent = count.length;
}
