// Usando while

var numeroAtual = 1;
var somatorio = 0;
while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}
console.log(`A soma é: ${somatorio}`);

// Usando do while
somatorio = 0;
numeroAtual = 1;
do {
  somatorio += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);
console.log(`A soma é: ${somatorio}`);

// Usando o for

somatorio = 0;
for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  somatorio += numeroAtual;
}
console.log(`A soma é: ${somatorio}`);
