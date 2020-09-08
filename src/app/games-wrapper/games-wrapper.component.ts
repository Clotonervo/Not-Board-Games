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

  currentPriceFilter: string = "Price";
  priceFilters = ["Price", "3", "4", "5"];
  filteredPrices = this.gamesArray;

  currentPlayerFilter: string = "Number of Players"
  playerFilters = ["Number of Players", "1", "2", "3", "4", "5", "6", "7", "8+"];
  filteredPlayers = this.gamesArray;

  currentTypeFilter: string = "Strategy & Social";
  typeFilters = ["Strategy & Social", "Strategy", "Social"];
  filteredTypes = this.gamesArray;
  

  constructor() { }

  ngOnInit(): void { }

  changePriceFilter(filter){
    this.currentPriceFilter = filter;
    if(filter === "Price"){
      this.filteredPrices = this.gamesArray;
      this.filtersChanged();
      return;
    }

    this.filteredPrices = this.gamesArray.filter(function (e) {
      return e.price <= filter;
    })
    this.filtersChanged();
    }

  changeTypeFilter(filter){
    this.currentTypeFilter = filter;

    if(filter === "Strategy & Social"){
      this.filteredTypes = this.gamesArray;
      this.currentTypeFilter = "Strategy & Social";
      this.filtersChanged();
      return;
    }

    this.filteredTypes = this.gamesArray.filter(function (e) {
      return e.type === filter;
    });
    this.filtersChanged();
  }

  changePlayerFilter(filter){
    this.currentPlayerFilter = filter;

    if(filter == "Number of Players"){
      this.filteredPlayers = this.gamesArray;
      this.filtersChanged();
      return;
    }

    if(filter == "8+"){
      this.filteredPlayers = this.gamesArray.filter(function(e) {
        var x = e.players.split("-")
        this.didFiltersChange = true;
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
      this.filtersChanged();
      return;
    }

    this.filteredPlayers = this.gamesArray.filter(function (e) {
      var x = e.players.split("-")
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
    this.filtersChanged();
    return 
  }

  getPlayers(players){
    return players.split("-");
  }

  filtersChanged(){
    this.filteredGames = [];
    for(var i = 0; i < this.gamesArray.length; i++){
      let currentGame = this.gamesArray[i];
      if(this.filteredPlayers.includes(currentGame) 
        && this.filteredPrices.includes(currentGame)
        && this.filteredTypes.includes(currentGame)){
          this.filteredGames.push(currentGame);
      }
    }
  }


}
