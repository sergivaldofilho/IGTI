var fs = require('fs');
fs.readFile('carros.json', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    var conteudo = JSON.parse(data);
    var carros = conteudo.carros;
    var carrosFerrari = [];
    for (var i = 0; i < carros.length; i++) {
      //console.log(carros[i]) Caso eu queira listar todos os carros
      //if (carros[i].marca === "Ferrari") {
      if (verificaMarca(carros[i], process.argv[2])) {
        carrosFerrari.push(carros[i]);
      }
    }
    // console.log(carrosFerrari) Ca eu quisesse listar os carros ferrari
    fs.writeFile('ferrari.json', JSON.stringify(carrosFerrari), function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
});

function verificaMarca(carro, marca) {
  if (carro.marca === marca) {
    return true;
  }
  return false;
}
