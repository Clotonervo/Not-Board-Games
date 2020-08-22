import { Component, OnInit, Input } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-game-section',
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.css']
})
export class GameSectionComponent implements OnInit {
  
  @Input() title: string;
  @Input() players: string;
  @Input() type: string;
  @Input() description: string;
  @Input() items: [any];
  @Input() price: string;
  slideIndex: number = 1;
  id: string;

  constructor() {

   }

  ngOnInit(): void {  
    this.id = this.title.replace(/\s/g, '');
  }

  ngAfterViewChecked(): void {
    this.showSlides(this.slideIndex);
  }

  showSlides(n) {
    var i;
    var slides = <HTMLElement[]><any>document.getElementsByClassName(this.id);
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[this.slideIndex-1].style.display = "block";
  }

  // Next/previous controls
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }



}
