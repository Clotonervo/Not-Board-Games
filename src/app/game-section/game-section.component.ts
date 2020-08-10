import { Component, OnInit, Input } from '@angular/core';

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
  @Input() imagePath: string;
  
  constructor() { }

  ngOnInit(): void {
    // console.log(this.title)
    // console.log(this.players)
    // console.log(this.type)
    // console.log(this.description)
    // console.log(this.imagePath)

  }

}
