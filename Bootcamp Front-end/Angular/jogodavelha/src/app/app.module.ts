import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicTocToeComponent } from './tic-toc-toe/tic-toc-toe.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTocToeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
