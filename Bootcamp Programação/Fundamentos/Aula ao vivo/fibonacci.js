/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million,
 find the sum of the even-valued terms. */

// Parte 1 - encontrar a sequencia de Fibonacci até 4000000
// Parte 2 - percorrer a lista encontrada e somar os números pares
// Parte 3 - somar os números pares

var array = [1, 2];
var valor = 3;
var i = 3;
while (valor < 4000000) {
  array.push(valor);
  valor = array[i - 1] + array[i - 2];
  i++;
}
//console.log(array);

var soma = 0;
//var pares = [];
for (var j = 0; j < array.length; j++) {
  if (array[j] % 2 === 0) {
    //pares.push(array[j]);
    soma += array[j];
  }
}
console.log(soma);

/* Parte 3 incorporada
var soma = 0;
for (var k = 0; k < pares.length; k++) {
  soma += pares[k];
}
*/
