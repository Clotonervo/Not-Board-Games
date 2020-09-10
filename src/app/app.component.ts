import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Not-Board-Games';
  currentlySelectedScreen = 'About Us';
  menuVisible = true;

  changePage(newPage){
    this.currentlySelectedScreen = newPage;
  }

  toggleMenu(){
    this.menuVisible ? this.menuVisible = false : this.menuVisible = true;
  }
}
