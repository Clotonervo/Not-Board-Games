import { Component, OnInit } from '@angular/core';
import games from '../../assets/games.json';

@Component({
  selector: 'app-games-wrapper',
  templateUrl: './games-wrapper.component.html',
  styleUrls: ['./games-wrapper.component.css']
})
export class GamesWrapperComponent implements OnInit {
  public gamesArray:{title:string, price:string, description:string, players:string, items:string[], type:string, link:string}[] = games;
  filteredGames = this.gamesArray;

  currentPriceFilter: string = "Price Filter";
  priceFilters = ["One", "Two", "Three", "This is last one"];

  currentTypeFilter: string = "Strategy & Social";
  typeFilters = ["Strategy & Social", "Strategy", "Social"];
  

  constructor() { 
    // console.log(this.gamesArray)
  }

  ngOnInit(): void {}

  changePriceFilter(filter){
    this.currentPriceFilter = filter;
  }

  changeTypeFilter(filter){
    this.currentTypeFilter = filter;

    if(filter === "Strategy & Social"){
      this.filteredGames = this.gamesArray;
      this.currentTypeFilter = "Strategy & Social";
      return;
    }

    this.filteredGames = this.gamesArray.filter(function (e) {
      return e.type === filter;
    });

  }


}
