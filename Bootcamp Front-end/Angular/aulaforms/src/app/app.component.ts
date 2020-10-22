import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      forbiddenNameValidator('Sergio'),
    ]),
    address: new FormControl(''),
  });

  onSubmit() {
    console.log(this.myForm.value);
  }
}

export function forbiddenNameValidator(invalidName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value === invalidName) {
      return { forbiddenName: { value: control.value } };
    } else {
      return null;
    }
  };
}
