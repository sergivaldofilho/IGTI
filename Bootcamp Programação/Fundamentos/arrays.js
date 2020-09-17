/*
Arrays
*/

var carros = ['Gol', 'Uno', 'Pálio'];

var primeiroCarro = carros[0];
var segundoCarro = carros[1];
var terceiroCarro = carros[2];

console.log(primeiroCarro);
console.log(segundoCarro);
console.log(terceiroCarro);

console.log(carros.length); //Essa propriedade '.length' é utilizada para descobrir o tamanho da array
console.log(carros[carros.length - 1]); //Nesse caso descobrimos o último elemento da array

carros[carros.length] = 'Fit'; //Incluir um elemento no último indice da array
console.log(carros[carros.length - 1]); //Nesse caso descobrimos o último elemento da array

//carros[10] = 'Polo'; //É possivel também inserir um elemento em um índice distante dos existentes
carros.push('Polo'); //Igual ao comando "carros[carros.length] = 'Fit'""
console.log(carros);
