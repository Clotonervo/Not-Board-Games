import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Not-Board-Games';
  gamesArray = [
    {title:"Agricula", players:"2-5", type:"Strategy", imagePath:"../assets/agricula1.png", description:"This is a big game"},
    {title:"Agricula", players:"2-5", type:"Strategy", imagePath:"../assets/agricula1.png", description:"This is a big game"}
  ];
}
