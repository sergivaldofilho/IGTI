window.addEventListener('load', start);

//var globalNames = [];
var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start() {
  inputName = document.querySelector('#nameInput');

  preventFormSubmit();
  activateInput();
  render();
}

//Evita que o form seja recarregado
function preventFormSubmit() {
  function handleFormSubimit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubimit);
}

//Ativa o input no inicio do carregamento, e torna a digitação reativa
function activateInput() {
  function insertName(newName) {
    globalNames.push(newName);
  }

  function updateName(newName) {
    globalNames[currentIndex] = newName;
  }

  function handleTyping(event) {
    var hasText = !!event.target.value && event.target.value.trim() !== '';

    if (!hasText) {
      clearInput();
      return;
    }
    if (event.key === 'Enter') {
      var typedName = event.target.value;
      if (isEditing) {
        updateName(typedName);
      } else {
        insertName(typedName);
      }
      isEditing = false;
      clearInput();
      render();
    }
  }

  inputName.focus();
  inputName.addEventListener('keyup', handleTyping);
}

//Pega o elemento div que irá imprimir os nomes cadastrados até o momento
function render() {
  function createDeleteButton(index) {
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }
    var button = document.createElement('button');
    button.textContent = 'x';
    //ClassList.add cria uma classe dentro de um elemento HTML
    button.classList.add('deleteButton');

    button.addEventListener('click', deleteName);

    return button;
  }

  function createSpan(name, index) {
    function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }
    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;
    span.addEventListener('click', editItem);

    return span;
  }
  var displayName = document.querySelector('#names'); //Elemento div encontrado a partir do id #names
  displayName.innerHTML = '';

  //Criar um elemento <ul>
  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var currentNames = globalNames[i];
    var button = createDeleteButton(i);
    var span = createSpan(currentNames, i);

    //CreateElement cria um elemento HTML
    var li = document.createElement('li');

    //TextContent inclui valores nos elementos
    //li.textContent = currentNames;

    //appendChild inclui os elementos dentro de outro elemento
    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  displayName.appendChild(ul);
  clearInput();
}

//Função para limpar o input
function clearInput() {
  inputName.value = '';
  inputName.focus();
}
