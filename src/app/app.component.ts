import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Not-Board-Games';
  currentlySelectedScreen = 'Games';

  changePage(newPage){
    this.currentlySelectedScreen = newPage;
  }
}
