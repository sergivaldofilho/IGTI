/*
Manipulação de Arrys
*/

var carros = ['Gol', 'Uno', 'Pálio', 'Sandero'];

console.log(carros);
carros.pop(); // pop remove ultimo elemento do array e retorna o elemento
console.log(carros);
carros.push('Ká'); //push insere o elemento no fim do array e retorna o tamanho do array
console.log(carros);
carros.shift(); //shift remove o elemento inicial do array, retorna ele e atualiza os indices do array
console.log(carros);
carros.unshift('Onix'); //shift insere o elemento inicial do array, atualiza os indices do array e retorna o tamanho do array
console.log(carros);
carros[2] = 'Novo Uno'; //Aqui nós atualizamos o elementos de um índice informado
console.log(carros);
//delete carros[2]; //delete remove elementos deixando "undefined" o índice
//console.log(carros);

/*
  Funcionamento do splice:  
    primeiro parâmetro: posição inicial
    segundo parâmetro: elementos removidos a partir da posição inicial
    terceiro e demais argumentos: elementos que serão inseridos a partir da posição inicial
*/
carros.splice(2, 0, 'HRV', 'Creta');
console.log(carros);

// concat contatena um ou mais arrays em outro e retorna o novo array criado
var carrosAntigos = ['Brasília', 'Monza', 'Fusca'];
var carrosAntigos2 = ['Del Rey', 'Chevette', 'Corcel'];
var todosCarros = carros.concat(carrosAntigos, carrosAntigos2);
console.log(todosCarros);

/* slice cria um novo array sem alterar o array original
    primeiro parametro: posição inicial
    segundo parametro (opcional): posição final (não incluso)
*/
var novoArray = todosCarros.slice(1);
console.log(todosCarros);
console.log(novoArray);
