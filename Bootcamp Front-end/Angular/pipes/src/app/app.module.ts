import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
/* Importar o LOCALE_ID já deixa um idioma configurado por padrão, que deve 
ser acrescentado no providers*/

import { AppComponent } from './app.component';
import { CepPipe } from './cep.pipe'; //Importando o pipe de CEP criado manualmente
import { CpfPipe } from './cpf.pipe'; //Importado automáticamente com o ng generate pipe

// Importar manualmente o formatador de números para br - localePt
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { JoinStringsPipe } from './join-strings.pipe';
registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, CepPipe, CpfPipe, JoinStringsPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
