var fs = require('fs');
var nomeArquivo = 'Bootcamp Programação/carros.json';
var carros = ['Gol', 'Uno', 'Pálio', 'Celta'];
var concessionaria = {
  nome: 'ClemGomes Auto',
  carros,
};

fs.writeFile(nomeArquivo, JSON.stringify(concessionaria), function (err) {
  if (err) {
    console.log(err);
  } else {
    fs.readFile(nomeArquivo, 'utf-8', function (err, data) {
      if (err) {
        console.log(err);
      } else {
        var obj = JSON.parse(data);
        obj.carros.push('HRV');
        console.log(obj);
        fs.writeFile(nomeArquivo, JSON.stringify(obj), function (err) {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  }
});
