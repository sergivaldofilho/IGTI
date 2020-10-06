import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'minha-app';

  movies = [
    { title: 'Os vingadores', rating: 5 },
    { title: 'Jóias Brutas', rating: 3 },
    { title: 'Parasita', rating: 5 },
    { title: 'O Irlandês', rating: 4 },
    { title: 'Pantera Negra', rating: 4 },
  ];

  series = [
    { title: 'Sherlock', rating: 5 },
    { title: 'Game of Thrones', rating: 3 },
    { title: 'Flash', rating: 5 },
    { title: 'The Last Kingdom', rating: 4 },
    { title: 'Vikings', rating: 4 },
  ];
}
