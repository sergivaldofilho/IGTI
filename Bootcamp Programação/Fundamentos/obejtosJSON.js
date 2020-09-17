var pessoa = {
  nome: 'João',
  idade: 29,
  telefone: '(82) 99697-9842',
  temCarro: true,
  animaisEstimacao: ['Totó', 'Bob'],
  pai: {
    nome: 'João',
    idade: 55,
  },
};
(pessoa.mae = {
  nome: 'Maria',
  idade: 54,
}),
  (pessoa.nome += ' Filho');

/*console.log(pessoa);
console.log(pessoa.animaisEstimacao[1]);
pessoa.animaisEstimacao.push('Gober');
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.pai.nome);*/

/*salvarDadosPessoa(pessoa);

function salvarDadosPessoa(pessoa) {
  console.log(pessoa.nome);
} */

console.log(JSON.stringify(pessoa)); // Converte um objeto JSON em string
JSON.parse(); // Aqui é feito o inverso
