/*
Estruturas de Decisão
*/

// If / Else - Operadores para comparação

var a = 500;
var b = 50;

if (a > b) {
  console.log('a é maior que b');
} else if (b > a) {
  console.log('b é maior que a');
} else {
  console.log('a e b são iguais');
}

var c = 40;
var d = 30;
if (c >= d) {
  console.log('c é maior ou igual a d');
}
if (d >= c) {
  console.log('d é menor ou igual a d');
}

var e = 10;
var f = 10;
if (e == f) {
  console.log('e é igual a f');
}
if (e != f) {
  console.log('e é diferente a f');
}
if (e === f) {
  console.log('e é igual a f');
}
if (e !== f) {
  console.log('d é diferente a f');
}

// Operadores lógicos (E/OU)

var i = 4;
var j = 3;
var k = 9;
var l = 7;

if (i > j && l > k) {
  console.log('i é maior que j');
}
if (i > j || l > k) {
  console.log('um dos dois eram válidos');
}

console.log(!(1 > 2)); //Executar negação - transforma o false em true
if (!(1 > 2)) {
  console.log('execute');
}

// Switch

var fruta = 'manga';
var valor = 0;

if (fruta === 'banana') {
  valor = 3;
} else if (fruta === 'maca') {
  valor = 4;
} else if (fruta === 'abacaxi') {
  valor = 6;
} else if (fruta === 'mamao') {
  valor = 5.5;
} else if (fruta === 'melao') {
  valor = 2;
} else {
  valor = 10;
}
//console.log('valor: ' + valor);

switch (fruta) {
  case 'banana':
    valor = 3;
    break;
  case 'maca':
    valor = 4;
    break;
  case 'abacaxi':
    valor = 6;
    break;
  case 'mamao':
    valor = 5.5;
    break;
  case 'melao':
    valor = 2;
    break;
  default:
    valor = 10;
}
console.log('valor: ' + valor);

// Operador ternário

var x = 5;
var y = 2;
var resultado = '';

if (x > y) {
  resultado = 'x é maior que y';
} else {
  resultado = 'senao';
}
console.log(resultado);

resultado = x > y ? 'x maior que y' : 'nao é';
console.log(resultado);
