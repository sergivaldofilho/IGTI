import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text = 'Esse é o meu texto';
  n = 25358.54631;
  today = new Date();
  myZipCode = '57084160';
  myCPF = '05949503414';

  strings: string[] = ['maria', 'jose'];

  addString(newString) {
    this.strings.push(newString);
    // Exemplo de Impure pipe manual
    // this.strings = [...this.strings, newString];
  }
}
