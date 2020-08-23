import { Component, OnInit } from '@angular/core';
import games from '../../assets/games.json';

@Component({
  selector: 'app-games-wrapper',
  templateUrl: './games-wrapper.component.html',
  styleUrls: ['./games-wrapper.component.css']
})
export class GamesWrapperComponent implements OnInit {
  public gamesArray:{title:string, price:string, description:string, players:string, items:string[], type:string}[] = games;

  currentFilter: string = "This is current";
  filters = ["One", "Two", "Three", "This is last one"]
  

  constructor() { 
    // console.log(this.gamesArray)
  }

  ngOnInit(): void {}

  changeFilter(filter){
    this.currentFilter = filter;
  }
}
