/* Fetch é utilizado para requisições HTTP. Trabalha internamente com promises
é comun no fetch que os dados sejam retornados em formato JSON

  Promises são muito utilizadas no JavaScript assíncrono, e resolvem parcialmente
 o problema de callback hell

  Async/Await é o açucar sintático de promises, busca melhorar a legibilidade do código*/

window.addEventListener('load', () => {
  doFetch();
  doFetchAsync();
  executeDivisionPromisse();
  executeDivisionPromisseAsyncAwait();
});

function doFetch() {
  fetch('https://api.github.com/users/sergivaldofilho')
    .then((res) => {
      res.json().then((data) => showData(data));
    })
    .catch((error) => console.log('Erro na execução'));
}

async function doFetchAsync() {
  const res = await fetch('https://api.github.com/users/sergivaldofilho');
  const json = await res.json();
  console.log(json);
}

function showData(data) {
  const user = document.querySelector('#users');
  user.textContent = data.login + ' ' + data.name;
}

function divisionPromisse(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possível dividir por zero');
    }
    resolve(a / b);
  });
}
// const scgomes = fetch('https://api.github.com/users/sergivaldofilho');
// console.log(scgomes);
// console.log('antes da Promise');
// console.log('depois da Promise');

function executeDivisionPromisse() {
  divisionPromisse(12, 6)
    .then((result) => console.log(result))
    .catch((errorMessage) => console.log('Falha na divisão \n' + errorMessage));
}

async function executeDivisionPromisseAsyncAwait() {
  const division = await divisionPromisse(12, 2);
  console.log(division);
}
