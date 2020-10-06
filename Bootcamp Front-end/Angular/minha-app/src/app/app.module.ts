import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { CounterDatabidingComponent } from './counter-databiding/counter-databiding.component';
import { TodolistComponent } from './todolist/todolist.component';
import { RatingComponent } from './rating/rating.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    CounterDatabidingComponent,
    TodolistComponent,
    RatingComponent,
    PanelComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
