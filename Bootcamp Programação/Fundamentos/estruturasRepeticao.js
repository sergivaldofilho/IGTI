// For

for (var i = 0; i < 10; i++) {
  //  console.log(i);
}

var carros = ['Gol', 'Palio', 'Uno', 'Celta', 'Sandero'];
for (var i = 0; i < carros.length; i++) {
  //  console.log(carros[i]);
}
for (var i = carros.length - 1; i >= 0; i--) {
  //  console.log(carros[i]);
}

// While

var i = 0;
while (i < carros.length) {
  //  console.log(carros[i]);
  i++;
}

// while (true) {    - Aqui o prompt imprimiria sem parar, o que nos ajuda a entender a necessidade do break,
//   console.log('olá');
//}

var i = 0;
while (i < carros.length) {
  //console.log(carros[i]);
  if (carros[i] === 'Palio') {
    console.log('Carro encontrado: ' + carros[i]);
    break; //O break interrompe por completo todas as interações;
  }
  i++;
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = 0;
while (i < numeros.length) {
  var num = numeros[i];
  i++;
  if (num % 2 === 0) {
    console.log(num + ' é par');
    continue; // O continue só interrompe o laço atual, retornando ao inicio da repetição
  }
  console.log(num + ' é impar');
}

// do While

var j = 10;
do {
  j++;
  console.log(j);
} while (j < 10);

// For of
for (var carro of carros) {
  console.log(carro);
}
