console.log(process.argv); //O process argv é utilizado para receber parâmetros na linha de comando

var num1 = parseInt(process.argv[2]);
var operacao = process.argv[3];
var num2 = parseInt(process.argv[4]);
var resultado = 0;

switch (operacao) {
  case '+':
    resultado = num1 + num2;
    break;
  case '-':
    resultado = num1 - num2;
    break;
  case '*':
    resultado = num1 * num2;
    break;
  case '/':
    resultado = num1 / num2;
    break;
  case '//':
    resultado = num1 % num2;
    break;
  case '%':
    resultado = (num1 * num2) / 100;
    break;
  case '**':
    resultado = num1 ** num2;
    break;
  default:
    resultado = 0;
}

console.log('O resultado é: ' + resultado);
