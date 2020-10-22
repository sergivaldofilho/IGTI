import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TimerService } from '../timer.service';

@Component({
  selector: 'configtrainning',
  templateUrl: './configtrainning.component.html',
  styleUrls: ['./configtrainning.component.css'],
})
export class ConfigtrainningComponent implements OnInit {
  exerciseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    duration: new FormControl(30, Validators.required),
    repeatition: new FormControl(3, Validators.required),
    preparation: new FormControl(15, Validators.required),
    rest: new FormControl(30, Validators.required),
  });

  add() {
    const exercise = this.exerciseForm.value;
    this.ts.add(exercise);
    this.exerciseForm.reset({ ...exercise, name: '' });
  }
  delete(i: number) {
    this.ts.delete(i);
  }

  constructor(public ts: TimerService) {}

  ngOnInit(): void {}
}
