/*
Operadores Aritméticos
*/
console.log('Operações padrão: \n');

var soma = 4 + 2;
var subtracao = 4 - 2;
var divisao = 4 / 2;
var multiplicacao = 4 - 2;
var resto = 35 % 3;

console.log('Soma: ' + soma);
console.log('Subtracao: ' + subtracao);
console.log('Divisao: ' + divisao);
console.log('Multiplicacao: ' + multiplicacao);
console.log('Resto: ' + resto);

console.log('\nPrecedências: \n');

var num1 = 10;
var num2 = 50;
var resultado = (num1 + num2) / (8 + 2);
console.log('Precedência de (num1 + num2) / (8 + 2): ' + resultado);

console.log('\nIncrementos, Decrementos e Atribuições: \n');

var incremento = 1;
incremento++;
var atribuicaoComAdicao = 5;
atribuicaoComAdicao += 6;
var decremento = 5;
decremento--;
var atribuicaoComSubtracao = 5;
atribuicaoComSubtracao -= 6;
var atribuicaoComMultiplicacao = 5;
atribuicaoComMultiplicacao *= 6;
var atribuicaoComDivisao = 5;
atribuicaoComDivisao /= 6;

console.log('Incremento: ' + incremento);
console.log('Decremento: ' + decremento);
console.log('Atrib Adição: ' + atribuicaoComAdicao);
console.log('Atrib Subtração: ' + atribuicaoComSubtracao);
console.log('Atrib Multiplicação: ' + atribuicaoComMultiplicacao);
console.log('Atrib Divisão: ' + atribuicaoComDivisao);

console.log(
  '\nSoma/Subtração de Incremento/Decremento Anterior e Posterior: \n'
);

var a = 4;
var b = 3;
var adicaoIncremPost = a + b++;
var adicaoIncremAnt = a + ++b;
var adicaoDecremPost = a + b--;
var adicaoDecremAnt = a + --b;

console.log('adicaoIncremAnt: ' + adicaoIncremAnt);
console.log('adicaoIncremPost: ' + adicaoIncremPost);
console.log('adicaoDecremAnt: ' + adicaoDecremAnt);
console.log('adicaoDecremPost: ' + adicaoDecremPost);

var c = 5;
var d = 2;
var subtracaoIncremPost = c - d++;
var subtracaoIncremAnt = c - ++d;
var subtracaoDecremPost = c - d--;
var subtracaoDecremAnt = c - --d;

console.log('subtracaoIncremAnt: ' + subtracaoIncremAnt);
console.log('subtracaoIncremPost: ' + subtracaoIncremPost);
console.log('subtracaoDecremAnt: ' + subtracaoDecremAnt);
console.log('subtracaoDecremPost: ' + subtracaoDecremPost);
