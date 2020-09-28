window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

// Manipulação de Arrays

// map - gera um novo array transformando os dados
function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log(nameEmailArray);

  return nameEmailArray;
}

// filter - gera um novo array filtrando elementos com base em proposição
function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });
  console.log(olderThan50);
}

// forEach - percorre todos os elementos do array, aplicando lógica
function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}
// reduce - realiza cálculo iterativo com base nos elementos
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);

  // let sumAges = 0;
  // for (let i = 0; i < people.results.length; i++) {
  //   var current = people.results[i];
  //   sumAges += current.dob.age;
  // }
  // console.log(sumAges);
}

// find - encontra elementos com base em proposições
function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });

  console.log(found);
}
// some - verifica se há pelo menos um elemento que atenda a proposição
function doSome() {
  const thereState = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });

  console.log(thereState);
}
// every - verifica se todos os elementos atendem a proposição
function doEvery() {
  const thereCountry = people.results.every((person) => {
    return person.nat === 'BR';
  });

  console.log(thereCountry);
}

// sort - ordena os elementos com base em um critério
function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return person.name.first; //Aqui sai em array
      //{
      //name: person.name.first, //Aqui sai em objeto
      //};
    })
    // Caso eu queira filtrar por uma letra do alfateto ou qualquer outra coisa
    .filter((person) => person.startsWith('A')) //Aqui sai em array
    //.filter((person) => person.name.startsWith('A')) //Aqui sai em um objeto
    // O sort vazio ordena todos os nomes
    .sort();
  // .sort((a, b) => {
  //   // return a.name.localeCompare(b.name);
  //   return a.name.length - b.name.length;
  // });
  console.log(mappedNames);
}
