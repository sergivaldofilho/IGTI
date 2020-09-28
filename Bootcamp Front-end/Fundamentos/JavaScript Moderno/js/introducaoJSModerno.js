'use strict'; // O JavaScript acusa mais erros

//console.log('Hello');

// var x let x const
//var tem escopo amplo
//let tem escopo reduzido

function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var ' + i);
  }
  i = 20;
  console.log(i);
}

function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('var ' + i);
  }
  // i = 20;
  // console.log(i);
}

withVar();
withLet();

//  const não permite reatribuir valor

// const c = 10;
// c = 20;

// é possivel incluir dados em variáveis const quando se trata de objetos e arrays
const d = [];
console.log(d);

d.push(1);
console.log(d);

function sum(a, b) {
  return a + b;
}

//Função anònima
const sum2 = function (a, b) {
  return a + b;
};

//Arrow function
const sum3 = (a, b) => {
  return a + b;
};

//Arrow function reduzida - quando só possui um comando,
// não precisa das chaves, return ou o nome 'function'
const sum4 = (a, b) => a + b;

console.log(sum(2, 3));
console.log(sum2(2, 3));
console.log(sum3(2, 3));
console.log(sum4(2, 3));

//Template literals - Usa crase para concatenar string e variáveis

const name = 'Sergivaldo';
const surName = 'Clemente';
const text1 = 'Meu nome é ' + name + ' ' + surName;
const text2 = `Meu nome é ${name} ${surName} `;

console.log(text1);
console.log(text2);

//Default Parameters - Deve ser colocados em funções para que ele assuma valores por padrão caso não sejam incluidos

const sum5 = (a, b = 10) => a + b;
console.log(sum5(2));
console.log(sum5(2, 8));
