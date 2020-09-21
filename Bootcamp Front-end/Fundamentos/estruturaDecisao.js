// Usando o if/else
var a = 5;
var b = 53;

if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  } else {
    console.log(a + ' é igual que ' + b);
  }
}

//Usando o swich
dia = 1;

switch (dia) {
  case 1:
    console.log('Domingo');
    break;
  case 2:
    console.log('Segunda-feira');
    break;
  case 3:
    console.log('Terça-feira');
    break;
  case 4:
    console.log('Quarta-feira');
    break;
  case 5:
    console.log('Quinta-feira');
    break;
  case 6:
    console.log('Sexta-feira');
    break;
  case 7:
    console.log('Sábado');
    break;
  default:
    console.log('Dia inválido');
    break;
}

// Operador ternário
a = 6;
b = 8;

var resposta =
  a > b
    ? a + 'Maior que ' + b
    : a < b
    ? a + ' menor que ' + b
    : a + ' igual a ' + b;
console.log(resposta);
