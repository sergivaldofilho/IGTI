import { Injectable } from '@angular/core';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  exercises: Exercise[] = [
    {
      name: 'Abdominal',
      duration: 30,
      repeatition: 3,
      preparation: 15,
      rest: 20,
    },
  ];
  currentExec: number;
  currentRep: number;
  timeLeft: number;
  phase: number;

  restart() {
    this.currentExec = 0;
    this.currentRep = 0;
    this.phase = 0;
    const ex = this.exercises[this.currentExec];
    this.timeLeft = this.getTimeOfCurrentPhase();
  }

  next() {
    if (this.phase < 2) {
      this.phase++;
    } else {
      const ex = this.exercises[this.currentExec];
      if (this.currentRep < ex.repeatition - 1) {
        this.currentRep++;
        this.phase = 1;
      } else {
        if (this.currentExec < this.exercises.length - 1) {
          this.currentExec++;
          this.currentRep = 0;
          this.phase = 0;
        } else {
          return;
        }
      }
    }
    this.timeLeft = this.getTimeOfCurrentPhase();
  }

  decrementTimeLeft(ellapsedTimeMs) {
    if (ellapsedTimeMs >= this.timeLeft) {
      this.next();
    } else {
      this.timeLeft = this.timeLeft - ellapsedTimeMs;
    }
  }

  private getTimeOfCurrentPhase() {
    const ex = this.exercises[this.currentExec];
    switch (this.phase) {
      case 0:
        return ex.preparation * 1000;
      case 1:
        return ex.duration * 1000;
      case 2:
        return ex.rest * 1000;
    }
  }

  add(exercise: Exercise) {
    this.exercises.push(exercise);
  }
  delete(i: number) {
    this.exercises.splice(i, 1);
  }

  constructor() {}
}
