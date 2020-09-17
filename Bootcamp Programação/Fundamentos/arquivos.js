var fs = require('fs');
var nomeArquivo = 'Bootcamp Programação/meuarquivo.txt';

console.log('1');

fs.writeFile(nomeArquivo, 'Um texto qualquer', function (err) {
  if (err !== null) {
    console.log(err);
  } else {
    console.log('arquivos escrito com sucesso');
    fs.appendFile(nomeArquivo, '\nnova linha de texto', function (err) {
      if (err) {
        console.log(err);
      } else {
        fs.readFile(nomeArquivo, 'utf-8', function (err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});

console.log('2');
