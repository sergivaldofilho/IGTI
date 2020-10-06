import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Output() ratingChange = new EventEmitter<number>();

  onClick(i: number) {
    this.ratingChange.emit(i);
  }

  constructor() {}

  ngOnInit(): void {}
}
