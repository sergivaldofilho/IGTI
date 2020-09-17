/* 

1) Gerar um número aleatório entre 1 e 100
2) Inicializar o número de tentativas como 10
3) Pedir ao jogador que advinhe o número
4) Decrementar o número de tentativas
5) Verificar se a tentativa está correta
6) Se a tentativa estiver correta: 
      - informar ao jogador
      - encerrar o jogo
7) Se a tentativa estiver incorreta e acabar as tentativas:
      - informar ao jogador
      - encerrar o jogo
8) Se a tentativa estiver incorreta e ainda houver tentativas:
      - informar se a tentativa é maior ou menor que o número informado
      - solicitar que o jogador tente novamente
*/

// 1) Gerar um número aleatório entre 1 e 100
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var numeroAleatorio = Math.round(Math.random() * 100);
if (numeroAleatorio === 0) {
  numeroAleatorio += 1;
}
var numeroTentativas = 10;

//console.log(numeroAleatorio);

pergunta();
function pergunta() {
  rl.question('Digite um número: ', function (numero) {
    numero = parseInt(numero);
    numeroTentativas--;
    if (numero === numeroAleatorio) {
      console.log('Parabéns, misera!');
      rl.close();
    } else if (numeroTentativas === 0) {
      console.log('Infiliz... errasse tudo! As 10 chances, tá ruim, ein!');
      rl.close();
    } else if (numero > numeroAleatorio) {
      console.log(
        'Errou, o número é menor, voce tem ' + numeroTentativas + ' tentativas.'
      );
      pergunta();
    } else {
      console.log(
        'Errou, o número é maior, voce tem ' + numeroTentativas + ' tentativas.'
      );
      pergunta();
    }
  });
}
