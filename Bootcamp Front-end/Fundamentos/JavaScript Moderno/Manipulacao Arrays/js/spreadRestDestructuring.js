window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestructuring();
});

// Spread - Espalha elementos de vetores
function doSpread() {
  const marriedMan = people.results.filter(
    (person) => person.name.title === 'Mr'
  );
  const marriedWoman = people.results.filter(
    (person) => person.name.title === 'Ms'
  );

  console.log(marriedMan);
  console.log(marriedWoman);

  const marriedPeople = [
    ...marriedMan,
    ...marriedWoman,
    { msg: 'Oi, eles são casados' },
  ];
  console.log(marriedPeople);
}

// Rest - Agrupa elementos em funções
function doRest() {
  console.log(infiniteSum(1, 2, 1000, 2546));
}

function infiniteSum(...numbers) {
  // console.log(numbers);
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Permite uma melhor escrita e legibilidade de código, compativel com arrays e objetos
function doDestructuring() {
  const first = people.results[0];

  //Declaração de variaveis comun
  // const username = first.login.username;
  // const password = first.login.password;

  //Declaração com o destructuring
  const { username, password } = first.login;

  console.log(username);
  console.log(password);
}
