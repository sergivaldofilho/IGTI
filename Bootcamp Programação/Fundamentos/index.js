console.log('Hello World no arquivo externo');
document.write('Texto qualquer');

function clickButton() {
  //DOM - Document Object Model
  // document.getElementById('paragrafo2').innerHTML = "Texto alterado com sucesso";
  // document.getElementById('paragrafo2').style.display = 'none';
  document.getElementsByClassName('paragrafo');
  for (
    var i = 0;
    i < document.getElementsByClassName('paragrafo').length;
    i++
  ) {
    document.getElementsByClassName('paragrafo')[i].style.color = 'blue';
    document.getElementsByClassName('paragrafo')[i].style.fontWeight = 'bold';
  }
  // alert('Hello World!');
}

function clickButton2() {
  document.getElementById('paragrafo2').style.display = 'block';
  var button = document.getElementsByTagName('button');
  var i = 0;
  while (i < button.length) {
    button[i].style.fontSize = '20px';
    i++;
  }
}

function lightOn() {
  document.getElementById('lampada').src = 'lampada-on.gif';
}
function lightOff() {
  document.getElementById('lampada').src = 'lampada-off.gif';
}

var quantidadeElementos = 0;

function adicionarElementos() {
  var elemento = document.createElement('P');
  elemento.innerHTML = 'elemento ' + quantidadeElementos;

  quantidadeElementos++;

  document.getElementById('div-elementos').appendChild(elemento);
}

function removerElementos() {
  var filhos = document.getElementById('div-elementos').childNodes;
  var size = filhos.length;
  for (var i = 0; i < size; i++) {
    document.getElementById('div-elementos').removeChild(filhos[0]);
  }
}
