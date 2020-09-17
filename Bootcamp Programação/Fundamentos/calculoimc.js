function calculoIMC() {
  var altura = parseFloat(document.getElementById('altura').value);
  var peso = parseFloat(document.getElementById('peso').value);
  var imc = peso / altura ** 2;
  var resultadoIMC = '';

  if (imc < 18.5) {
    resultadoIMC = 'abaixo do normal';
  } else if (imc >= 18.5 && imc < 25) {
    resultadoIMC = 'normal';
  } else if (imc >= 25 && imc < 30) {
    resultadoIMC = 'acima do normal';
  } else if (imc >= 30 && imc < 39) {
    resultadoIMC = 'em nível de obesidade';
  } else {
    resultadoIMC = 'em nível de obesidade grave';
  }
  // console.log(imc);
  document.getElementById('resultado').innerHTML = 'Seu IMC é: ' + imc;
  document.getElementById('descricaoresultado').innerHTML =
    'Seu IMC indica que seu peso está: ' + resultadoIMC;
}

function limpar() {
  document.getElementById('altura').value = 0;
  document.getElementById('peso').value = 0;
  document.getElementById('resultado').innerHTML = '';
  document.getElementById('descricaoresultado').innerHTML = '';
}
