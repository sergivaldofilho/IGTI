var globalCalculations = [
  {
    id: 1,
    description: 'Soma (a+b)',
    calculationFunction: function sum(a, b) {
      return a + b;
    },
    type: 'a_b',
  },

  {
    id: 2,
    description: 'Subtração (a-b)',
    calculationFunction: function subtract(a, b) {
      return a - b;
    },
    type: 'a_b',
  },

  {
    id: 3,
    description: 'Subtração (b-a)',
    calculationFunction: function subtract(b, a) {
      return b - a;
    },
    type: 'b_a',
  },

  {
    id: 4,
    description: 'Multiplicação (a-b)',
    calculationFunction: function multiply(a, b) {
      return formatNumber(a * b);
    },
    type: 'a_b',
  },

  {
    id: 5,
    description: 'Divisão (a/b)',
    calculationFunction: function division(a, b) {
      return getDivisionFrom(a, b);
      // if (b === 0) {
      //   return 'Divisão por zero';
      // }
      // return (a / b).toFixed(2);
    },
    type: 'a_b',
  },

  {
    id: 6,
    description: 'Divisão (b/a)',
    calculationFunction: function division(b, a) {
      return getDivisionFrom(b, a);
      // if (a === 0) {
      //   return 'Divisão por zero';
      // }
      // return (b / a).toFixed(2);
    },
    type: 'b_a',
  },

  {
    id: 7,
    description: 'Quadrado de a (a²)',
    calculationFunction: function square(a) {
      return formatNumber(a ** 2);
    },
    type: 'a',
  },

  {
    id: 8,
    description: 'Quadrado de b (b²)',
    calculationFunction: function square(b) {
      return formatNumber(b ** 2);
    },
    type: 'b',
  },

  {
    id: 9,
    description: 'Divisores de a (a)',
    calculationFunction: function divisorsFrom(a) {
      return getDivisorsFrom(a);
    },
    type: 'a',
  },

  {
    id: 10,
    description: 'Divisores de b (b)',
    calculationFunction: function factorialFrom(b) {
      return getDivisorsFrom(b);
    },
    type: 'b',
  },

  {
    id: 11,
    description: 'Fatorial de a (a)',
    calculationFunction: function factorialFrom(a) {
      return getFactorialFrom(a);
    },
    type: 'a',
  },

  {
    id: 12,
    description: 'Fatorial de b (b)',
    calculationFunction: function divisorsFrom(b) {
      return getFactorialFrom(b);
    },
    type: 'b',
  },
];

// Captura os elementos que contêm o primeiro e segundo número pelo id(#)
var globalInputA = document.querySelector('#inputA');
var globalInputB = document.querySelector('#inputB');

function start() {
  // Adiciona um evento de entrada que lida com as mudanças nos campos do
  // primeiro e segundo número e faz os cálculos predefinidos na array de
  // objetos globalCalculations
  globalInputA.addEventListener('input', handleChangeInputA);
  globalInputB.addEventListener('input', handleChangeInputB);

  calculate();
}

// As funções que lidam com as mudanças nos campos do primeiro e segundo número
// são necessárias para que o usuário não precise clicar num botão submit,
// as duas funções abaixo já fazem o cálculo automaticamente
function handleChangeInputA() {
  calculate();
}

function handleChangeInputB() {
  calculate();
}

// Função de cálculo das operações predefinidas na array de objetos globalCalculations
function calculate() {
  var divCalculations = document.querySelector('#calculations');

  var innerCalculations = document.createElement('div');
  innerCalculations.classList.add('row');

  var a = parseInt(globalInputA.value, 10);
  var b = parseInt(globalInputB.value, 10);

  for (var i = 0; i < globalCalculations.length; i++) {
    var currentCalculation = globalCalculations[i];
    var type = currentCalculation.type;
    var calculationFunction = currentCalculation.calculationFunction;

    var id = 'input_' + currentCalculation.id;

    var value = getCalculationsFrom(type, calculationFunction, a, b);

    var div = getMaterializeDiv();
    var input = getMaterializeInput(id, value);
    var label = getMaterializeLabel(id, currentCalculation.description);

    div.appendChild(input);
    div.appendChild(label);
    innerCalculations.appendChild(div);
  }

  divCalculations.innerHTML = '';
  divCalculations.appendChild(innerCalculations);
}

function getMaterializeDiv() {
  var div = document.createElement('div');
  div.classList.add('input-field', 'col', 's12', 'm6', 'l4');

  return div;
}

function getMaterializeInput(id, value) {
  var input = document.createElement('input');
  input.readOnly = true;
  input.type = 'text';
  input.id = id;
  input.value = value;
  input.classList.add('valid');

  return input;
}

function getMaterializeLabel(id, description) {
  var label = document.createElement('label');
  label.for = id;
  label.textContent = description;
  label.classList.add('active', 'myblue');

  return label;
}

function getCalculationsFrom(type, calculationFunction, a, b) {
  var value = '';

  switch (type) {
    case 'a':
      value = calculationFunction(a);
      break;
    case 'b':
      value = calculationFunction(b);
      break;
    case 'a_b':
      value = calculationFunction(a, b);
      break;
    case 'b_a':
      value = calculationFunction(b, a);
      break;
    default:
      value = 'O típo de cálculo não foi identificado';
  }

  return value;
}

function getDivisionFrom(number1, number2) {
  if (number2 === 0) {
    return 'Divisão por 0';
  }
  //var division = number1 / number2;
  return formatNumber((number1 / number2).toFixed(2));
}

function formatNumber(number) {
  return new Intl.NumberFormat('pt-BR').format(number);
}

function getDivisorsFrom(number) {
  var divisors = [];
  for (var i = 0; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors.join(',') + ' (' + divisors.length + ')';
}

function getFactorialFrom(number) {
  if (number > 21) {
    return 'Fatorial muito grande';
  }
  var factorial = 1;
  for (var i = number; i > 1; i--) {
    factorial *= i;
  }
  return formatNumber(factorial);
}

start();
//console.log(calculate);
