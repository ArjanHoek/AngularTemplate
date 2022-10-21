import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<h3>{{ message }}</h3>`,
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class WarningAlertComponent {
  message = 'Warning';
}
