import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent  {

  @Input() imgPaths: string[] = [];

  currentIndex: number = 0;

  goTo(index: number) {
    this.currentIndex = index;
  }

  goNext() {
    if (this.currentIndex === this.imgPaths.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  goPrev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.imgPaths.length - 1;
    } else {
      this.currentIndex--;
    }
  }

}
