import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  @Input() title: string = '';
  @Input() images: string[] = [];
  atualImage: number = 0;

  nextImages() {
    this.atualImage++;
  }

  prevImages() {
    this.atualImage--;
  }

  prevAllImages() {
    this.atualImage = 0;
  }

  nextAllImages() {
    this.atualImage = this.images.length - 1;
  }

  lastImage(): boolean {
    return this.atualImage === this.images.length - 1;
  }

  firstImage(): boolean {
    return this.atualImage == 0;
  }
  constructor() {}

  ngOnInit(): void {}
}
