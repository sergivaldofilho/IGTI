var numero = parseInt(process.argv[2]);

var somaPrimos = 0;
var numerosPrimos = [];
for (n = 2; n <= numero; n++) {
  if (n === 2 || n === 3 || n === 5 || n === 7) {
    numerosPrimos.push(n);
    somaPrimos += n;
  }
  if (n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    numerosPrimos.push(n);
    somaPrimos += n;
  }
}

console.log(numerosPrimos);
console.log(somaPrimos);
