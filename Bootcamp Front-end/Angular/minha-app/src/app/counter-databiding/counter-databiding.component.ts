import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-databiding',
  templateUrl: './counter-databiding.component.html',
  styleUrls: ['./counter-databiding.component.css'],
})
export class CounterDatabidingComponent {
  valor: number = 0;

  increment() {
    this.valor++;
  }
}
