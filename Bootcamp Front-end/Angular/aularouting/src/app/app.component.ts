import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aularouting';
  constructor(private router: Router) {}

  goToPageTwo() {
    this.router.navigate(['page2', '3 ']);
  }
}
