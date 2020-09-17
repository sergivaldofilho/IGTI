var fs = require('fs');
fs.readFile(
  'c:/IGTI/BootCamp Programação/Fundamentos/Trabalho - Desafio/funcionarios.json',
  function (err, data) {
    if (err) {
      console.log(err);
    } else {
      var content = JSON.parse(data);
      var employees = content.funcionarios;
      var employeesSector = [];
      var list = [];

      var salary = 0;
      var biggerSalary = 0;
      var nameBiggerSalary = '';
      var smallerSalary = 4080;
      var nameSmallerSalary = '';

      for (i = 0; i < employees.length; i++) {
        salary += employees[i].salario;
        if (employees[i].salario > biggerSalary) {
          biggerSalary = employees[i].salario;
          nameBiggerSalary = employees[i].nome;
        }
        if (employees[i].salario < smallerSalary) {
          smallerSalary = employees[i].salario;
          nameSmallerSalary = employees[i].nome;
        }
        if (employees[i].setor === process.argv[2]) {
          employeesSector.push(employees[i]);
        }
        list.push(employees[i]);
      }
      var salarySector = 0;
      var biggerSalarySector = 0;
      var nameBiggerSalarySector = '';
      var smallerSalarySector = 4082;
      var nameSmallerSalarySector = '';
      var listSector = [];

      for (s = 0; s < employeesSector.length; s++) {
        if (employeesSector[s].salario > biggerSalarySector) {
          biggerSalarySector = employeesSector[s].salario;
          nameBiggerSalarySector = employeesSector[s].nome;
        }
        if (employeesSector[s].salario < smallerSalarySector) {
          smallerSalarySector = employeesSector[s].salario;
          nameSmallerSalarySector = employeesSector[s].nome;
        }

        salarySector += employeesSector[s].salario;
        listSector.push(employeesSector[s]);
      }
    }
    var mediumSalary = salary / employees.length;
    var mediumSalarySector = salarySector / employeesSector.length;

    console.log(
      'O funcionário com maior salário na empresa é ' +
        nameBiggerSalary +
        ', R$ ' +
        biggerSalary
    ); //Retorna o funcionário com o maior salario da empresa
    console.log(
      'O funcionário com menor salário na empresa é ' +
        nameSmallerSalary +
        ', R$ ' +
        smallerSalary
    ); //Retorna o funcionário com o menor salario da empresa
    console.log('A média salarial da empresa é: R$ ' + mediumSalary); //Retorna a média salarial da empresa
    console.log(
      'O funcionário com maior salário no setor é ' +
        nameBiggerSalarySector +
        ', R$ ' +
        biggerSalarySector
    ); //Retorna o funcionário com o maior salário no setor
    console.log(
      'O funcionário com menor salário no setor é ' +
        nameSmallerSalarySector +
        ', R$ ' +
        smallerSalarySector
    ); //Retorna o funcionário com o menor salário no setor
    console.log('A média salarial do setor é: R$ ' + mediumSalarySector); //Retorna a média salarial do setor
    console.log(salary); //Retorna o valor da soma de todos os salários
    console.log(salarySector); //Retorna o valor da soma dos salários de um setor
    // console.log(listSector); //Array com os funcionários do setor
    // console.log(smallerSalary);
  }
);
