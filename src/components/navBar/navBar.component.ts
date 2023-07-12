import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navBar.component.html',
})
export class NavbarComponent {
  constructor(private router: Router) {
    localStorage.setItem('gender', 'all');
  }

  onOptionSelected(event: any) {
    localStorage.setItem('gender', event.target.value);
  }

  navigateToHome() {
    localStorage.removeItem('urlOfPlanet');
    this.router.navigateByUrl('/');
  }
}
