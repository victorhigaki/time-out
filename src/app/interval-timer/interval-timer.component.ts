import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css'],
})
export class IntervalTimerComponent implements OnInit {
  roundForm: FormGroup;

  currentRound = 0;
  timeLeft = 0;
  interval;
  finish = true;

  get rounds() {
    return this.roundForm.get('rounds').value;
  }

  get seconds() {
    return this.roundForm.get('seconds').value;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.roundForm = this.fb.group({
      rounds: [''],
      seconds: [''],
      exercise: [''],
    });
  }

  addLine(e) {
    console.log(e);
  }

  onStart() {
    this.finish = false;
    this.currentRound = 0;

    this.interval = setInterval(() => {
      if (this.timeLeft === 1 && this.currentRound === +this.rounds) {
        clearInterval(this.interval);
        this.finish = true;
      } else if (this.timeLeft === 0 && this.currentRound !== this.rounds) {
        this.timeLeft = this.seconds;
        this.currentRound++;
      } else if (this.timeLeft > 0) {
        this.timeLeft = this.timeLeft - 1;
      }
    }, 1000);
  }

  onCancel() {
    this.currentRound = 0;
    this.timeLeft = 0;
    clearInterval(this.interval);
  }
}
