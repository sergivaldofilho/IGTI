function sum(a: number, b: number): number {
  return a + b;
}

// sum('5', 3);
sum(5, 3);

function print(x: boolean[]) {}

// Quando você não define um tipo de função para o parâmetro o typescript aceitará qualquer coisa
// utilizará o tipo especial 'n' (qualquer coisa)
function sum2(a, b) {
  return a + b;
}

sum2('Hello ', 3);

//Atribuindo um tipo a uma variável - utiliza dois pontos ':' após a variável
let x: number = 5;
//Embora não haja uma atribuição, o typescript infere nesse caso o tipo de variável,
// definindo-a como number
let y = 9;

sum(x, 8);
sum2(x, y);

// declarando objetos
function insertStudent(student: student){

}

insertStudent({matricula: 2091, name:'Sergivaldo', birthDay: '08/06/1991'})
// insertStudent({matricula: "2091", name:2018})

interface student {
  matricula: number,
  name: string,
  birthDay: string
}

let student2 = {
  matricula: 2120,
  name: 'Clemgomes',
  birthDay: "19/08/1989",
  class: 3
}

insertStudent(student2);

// Declaração de classes

class Student {
  matricula: number,
  name: string,

  save(){

  }
}

let student1 = new Student()
student1.save()
student1.exclude()