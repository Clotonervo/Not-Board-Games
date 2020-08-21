import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Not-Board-Games';
  gamesArray = [
    {title:"Agricola", players:"2-5", type:"Strategy", price:"$5", items:["../assets/agricula1.png", "../assets/agricula2.png"], description:"In Agricola (Latin for 'farmer'), you're a farmer in a wooden shack with your spouse and little else. On a turn, you get to take only two actions, one for you and one for the spouse, from all the possibilities you'll find on a farm: collecting clay, wood or stone; building fences; and so on. You might think about having kids in order to get more work accomplished, but first you need to expand your house. And what are you going to feed all the little rug rats? Agricola is a turn based game."},
    // {title:"Agricula", players:"2-5", type:"Strategy", imagePath:"../assets/agricula1.png", description:"This is a big game"}
  ];
}
