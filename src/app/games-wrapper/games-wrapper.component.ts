import { Component, OnInit } from '@angular/core';
import games from '../../assets/games.json';
import { kMaxLength } from 'buffer';

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

  currentPlayerFilter: string = "Number of Players"
  playerFilters = ["Number of Players", "1", "2", "3", "4", "5", "6", "7", "8+"];

  currentTypeFilter: string = "Strategy & Social";
  typeFilters = ["Strategy & Social", "Strategy", "Social"];
  

  constructor() { 
    // console.log(this.gamesArray);
    // console.log(this.getPlayers(this.games));
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

  changePlayerFilter(filter){
    this.currentPlayerFilter = filter;
    console.log("Player filter changed");

    if(filter == "Number of Players"){
      this.filteredGames = this.gamesArray;
      return;
    }

    if(filter == "8+"){
      this.filteredGames = this.gamesArray.filter(function(e) {
        var x = e.players.split("-")
        if(x[0] == "Unlimited"){
          return true;
        }
        else if (x.length == 2){
          if (x[1] >= "8"){
            return true;
          }
        }
        return false;
      });
      return;
    }

    this.filteredGames = this.gamesArray.filter(function (e) {
      var x = e.players.split("-")
      console.log
      if(x[0] == "Unlimited"){
        return true;
      }
      else if (x.length == 1 && filter == "2"){
        return true
      }
      else if (x.length == 2){
        if (x[0] <= filter && x[1] >= filter){
          return true;
        }
      }
      return false;
    });
    return 
  }

  getPlayers(players){
    return players.split("-");
  }


}
