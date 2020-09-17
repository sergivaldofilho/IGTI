var funcionarios = [];
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

mostrarMenu();

function mostrarMenu() {
  rl.question(
    'Digite o comando desejado: \n 1 - Cadastrar funcionário \n 2 - Imprimir contracheque \n S - Sair. \n',
    function (opcao) {
      if (opcao === '1') {
        console.log('Opção 1 - Cadastrar funcionário');
        cadastroFuncionario();
      } else if (opcao === '2') {
        console.log('Opção 2 - Imprimir contracheque');
        contrachequeFuncionario();
      } else if (opcao.toUpperCase() === 'S') {
        console.log(
          'Opção Sair Escolhida. Muito obrigado por utilizar o nosso sistema.'
        );
        rl.close();
      } else {
        console.log('Opção inválida, tente novamente.');
        mostrarMenu();
      }
    }
  );
}

function cadastroFuncionario() {
  rl.question('Digite o seu nome: ', function (nome) {
    rl.question('Digite o seu salario: ', function (salario) {
      funcionarios.push({ nome: nome, salario: parseFloat(salario) });
      console.log(funcionarios);
      mostrarMenu();
    });
  });
}

function contrachequeFuncionario() {
  // Verificar a posição do usuário
  rl.question('Digite o índice do Funcionário: ', function (indiceFunc) {
    var nomeFunc = funcionarios[indiceFunc].nome;
    var salarioBruto = funcionarios[indiceFunc].salario;
    var baseCalculo, descINSS, descIRRF, valeTransporte;
    var aliquotaINSS = [0.075, 0.09, 0.12, 0.14, 713.1];
    var tabSalarioINSS = [1045, 2089.6, 3134.4, 6101.06];
    var tabDifSalarioINSS = [1045, 1044.6, 1044.8];
    var aliquotaIRRF = [0.075, 0.15, 0.225, 0.275];
    var parcDeducIRRF = [142.8, 354.8, 636.13, 869.36];
    var tabBaseCalcIRRF = [1903.98, 2826.65, 3751.05, 4664.68];

    //------------------------- Calcular despesas ------------------------------
    // Calcular Vale Transporte
    if (salarioBruto <= tabSalarioINSS[1]) valeTransporte = salarioBruto * 0.06;
    else valeTransporte = 0.0;

    // Calcular INSS
    if (salarioBruto <= tabSalarioINSS[0]) {
      descINSS = salarioBruto * aliquotaINSS[0];
      baseCalculo = salarioBruto - descINSS;
    } else if (
      salarioBruto > tabSalarioINSS[0] &&
      salarioBruto <= tabSalarioINSS[1]
    ) {
      descINSS =
        tabDifSalarioINSS[0] * aliquotaINSS[0] +
        (salarioBruto - tabSalarioINSS[0]) * aliquotaINSS[1];
      baseCalculo = salarioBruto - descINSS;
    } else if (
      salarioBruto > tabSalarioINSS[1] &&
      salarioBruto <= tabSalarioINSS[2]
    ) {
      descINSS =
        tabDifSalarioINSS[0] * aliquotaINSS[0] +
        tabDifSalarioINSS[1] * aliquotaINSS[1] +
        (salarioBruto - tabSalarioINSS[1]) * aliquotaINSS[2];
      baseCalculo = salarioBruto - descINSS;
    } else if (
      salarioBruto > tabSalarioINSS[2] &&
      salarioBruto <= tabSalarioINSS[3]
    ) {
      descINSS =
        tabDifSalarioINSS[0] * aliquotaINSS[0] +
        tabDifSalarioINSS[1] * aliquotaINSS[1] +
        tabDifSalarioINSS[2] * aliquotaINSS[2] +
        (salarioBruto - tabSalarioINSS[2]) * aliquotaINSS[3];
      baseCalculo = salarioBruto - descINSS;
    } else {
      descINSS = aliquotaINSS[4];
      baseCalculo = salarioBruto - descINSS;
    }

    // Calcular IRRF
    if (baseCalculo <= tabBaseCalcIRRF[0]) descIRRF = 0.0;
    else if (
      baseCalculo > tabBaseCalcIRRF[0] &&
      baseCalculo <= tabBaseCalcIRRF[1]
    )
      descIRRF = baseCalculo * aliquotaIRRF[0] - parcDeducIRRF[0];
    else if (
      baseCalculo > tabBaseCalcIRRF[1] &&
      baseCalculo <= tabBaseCalcIRRF[2]
    )
      descIRRF = baseCalculo * aliquotaIRRF[1] - parcDeducIRRF[1];
    else if (
      baseCalculo > tabBaseCalcIRRF[2] &&
      baseCalculo <= tabBaseCalcIRRF[3]
    )
      descIRRF = baseCalculo * aliquotaIRRF[2] - parcDeducIRRF[2];
    else descIRRF = baseCalculo * aliquotaIRRF[3] - parcDeducIRRF[3];

    // Calular Salário Líquido
    var salarioLiquido = salarioBruto - (descINSS + descIRRF);

    //------------------------- FOLHA DE PAGAMENTO -----------------------------

    console.log('---------- FOLHA DE PAGAMENTO - BOOTCAMP IGTI ----------\n');
    console.log('Funcionário: ' + nomeFunc);
    console.log('Salário Bruto: R$' + salarioBruto);
    console.log('Desconto INSS: R$' + descINSS);
    console.log('Base Cálculo IRRF: R$' + baseCalculo);
    console.log('Desconto IRRF: R$' + descIRRF);
    console.log('Vale Transporte: R$' + valeTransporte);
    console.log('\n--------------------------------------------------------\n');
    console.log('Salário Líquido: R$' + salarioLiquido);
    console.log('\n----------------- FIM - BOOTCAMP IGTI ------------------');
    mostrarMenu();
  });
}
