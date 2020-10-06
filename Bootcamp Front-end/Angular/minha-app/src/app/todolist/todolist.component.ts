import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  // exibir: boolean = true;
  // toggleShow() {
  //   this.exibir = !this.exibir;
  // }

  newTask: string = '';

  tasks: TodoItem[] = [
    { description: 'Arrumar a cama', done: false },
    { description: 'Lavar os pratos', done: false },
    { description: 'Varrer a casa', done: false },
    { description: 'Fazer o trabalho prático do bootcamp', done: false },
  ];

  addTask() {
    this.tasks.push({
      description: this.newTask,
      done: false,
    });
  }

  deleteTask(i: number) {
    console.log('Exclui posição' + i);
    this.tasks.splice(i, 1);
  }
}
