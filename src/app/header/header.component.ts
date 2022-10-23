import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styles: [
    `
      header: {
        color: blue;
      }
    `,
  ],
  template: `
    <header>
      <h2>{{ title }}</h2>
    </header>
  `,
})
export class HeaderComponent {
  title = 'Header';
  constructor() {}
}
