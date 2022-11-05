import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() onViewChange = new EventEmitter<string>();

  title = 'Header';
  constructor() {}

  changeView(view: string) {
    this.onViewChange.emit(view);
  }
}
