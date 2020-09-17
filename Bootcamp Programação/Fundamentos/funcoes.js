function multiplicacao(p1, p2) {
  console.log('Função multiplicação executada');
  return p1 * p2;
}

function saudacao(nome) {
  console.log('Olá ' + nome + ' seja bem vindo!');
}

function funcaoSemParametro() {
  var a = 1;
  var b = 2;
  console.log(a + b);
}

var resultado = multiplicacao(4, 3);
console.log(resultado);
console.log(multiplicacao(12, 3));
saudacao('Gui');
funcaoSemParametro();
