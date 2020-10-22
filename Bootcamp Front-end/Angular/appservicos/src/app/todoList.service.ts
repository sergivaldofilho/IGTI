import { Injectable } from '@angular/core';

// Desnecessário quando importado no app.module, incluindo a class no providers
// @Injectable({
//   providedIn: 'root',
// })

export class TodoListService {
  itens: string[] = ['Item 1'];
  addItens(newItem: string) {
    this.itens.push(newItem);
  }
}
