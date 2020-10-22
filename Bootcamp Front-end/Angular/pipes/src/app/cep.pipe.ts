import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep',
})
export class CepPipe implements PipeTransform {
  transform(cep: string) {
    return cep.length == 8 ? cep.substring(0, 5) + '-' + cep.substring(5) : cep;
  }
}
