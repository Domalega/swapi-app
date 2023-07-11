import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navBar.component.html',
})
export class NavbarComponent {
  constructor() {
    localStorage.setItem('userChoice', 'all');
  }

  onOptionSelected(event: any) {
    localStorage.setItem('userChoice', event.target.value);
  }
}
