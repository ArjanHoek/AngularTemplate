import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Arjan';
  nav = {
    currentView: 'shopping-list',
  };

  handleViewChange(view: string) {
    this.nav.currentView = view;
  }
}
